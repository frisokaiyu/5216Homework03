//
//  SongsViewController.swift
//  Prancercise Tracker
//
//  Created by zhiliang_wang on 15/10/17.
//  Copyright © 2017 Razeware LLC. All rights reserved.
//

import HealthKit

class WorkoutDataStore {
  
  class func save(prancerciseWorkout: PrancerciseWorkout,
                  completion: @escaping ((Bool, Error?) -> Swift.Void)) {

    //1. Setup the Calorie Quantity for total energy burned
    let calorieQuantity = HKQuantity(unit: HKUnit.kilocalorie(),
                                     doubleValue: prancerciseWorkout.totalEnergyBurned)
    
    //2. Build the workout using data from your Prancercise workout
    let workout = HKWorkout(activityType: .other,
                            start: prancerciseWorkout.start,
                            end: prancerciseWorkout.end,
                            duration: prancerciseWorkout.duration,
                            totalEnergyBurned: calorieQuantity,
                            totalDistance: nil,
                            device: HKDevice.local(),
                            metadata: nil)
    
    //3. Save your workout to HealthKit
    let healthStore = HKHealthStore()
    
    let samples = self.samples(for: prancerciseWorkout)
    
    healthStore.save(workout) { (success, error) in
      
      guard error == nil else {
        completion(false, error)
        return
      }
      
      healthStore.add(samples,
                      to: workout,
                      completion: { (samples, error) in
         
          guard error == nil else {
            completion(false, error)
            return
          }
         
          completion(true, nil)
      })
      
    }
  }
  
  private class func samples(for workout: PrancerciseWorkout) -> [HKSample] {
    
    var samples = [HKSample]()
    
    //1. Verify that the energy quantity type is still available to HealthKit.
    guard let energyQuantityType = HKSampleType.quantityType(forIdentifier: HKQuantityTypeIdentifier.activeEnergyBurned) else {
      fatalError("*** Energy Burned Type Not Available ***")
    }
    
    //2. Create a sample for each PrancerciseWorkoutInterval
    for interval in workout.intervals {
      
      let calorieQuantity = HKQuantity(unit: HKUnit.kilocalorie(),
                                doubleValue: interval.totalEnergyBurned)
      
      let sample = HKQuantitySample(type: energyQuantityType,
                                    quantity: calorieQuantity,
                                    start: interval.start,
                                    end: interval.end)
      
      samples.append(sample)
    }
    
    return samples
  }
  
  class func loadPrancerciseWorkouts(completion: @escaping (([HKWorkout]?, Error?) -> Swift.Void)){
    
    //1. Get all workouts with the "Other" activity type.
    let workoutPredicate = HKQuery.predicateForWorkouts(with: .other)
    
    //2. Get all workouts that only came from this app.
    let sourcePredicate = HKQuery.predicateForObjects(from: HKSource.default())

    //3. Combine the predicates into a single predicate.
    let compound = NSCompoundPredicate(andPredicateWithSubpredicates: [workoutPredicate,
                                                                       sourcePredicate])
    
    let sortDescriptor = NSSortDescriptor(key: HKSampleSortIdentifierEndDate,
                                          ascending: true)
    
    let query = HKSampleQuery(sampleType: HKObjectType.workoutType(),
                              predicate: compound,
                              limit: 0,
                              sortDescriptors: [sortDescriptor]) { (query, samples, error) in
       
      DispatchQueue.main.async {
        
        //4. Cast the samples as HKWorkout
        guard let samples = samples as? [HKWorkout],
          error == nil else {
            completion(nil, error)
            return
        }
        
        completion(samples, nil)
      }
    }
    
    HKHealthStore().execute(query)
  }
}
