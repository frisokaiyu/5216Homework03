//
//  SongsViewController.swift
//  Prancercise Tracker
//
//  Created by zhiliang_wang on 15/10/17.
//  Copyright © 2017 Razeware LLC. All rights reserved.
//
import UIKit
import HealthKit

class WorkoutsTableViewController: UITableViewController {
  
  private enum WorkoutsSegues: String {
    case showCreateWorkout
    case finishedCreatingWorkout
  }
  
  private var workouts: [HKWorkout]?
  
  private let prancerciseWorkoutCellID = "PrancerciseWorkoutCell"
  
  lazy var dateFormatter:DateFormatter = {
    let formatter = DateFormatter()
    formatter.timeStyle = .short
    formatter.dateStyle = .medium
    return formatter
  }()
    
  override func viewDidLoad() {
    super.viewDidLoad()
    self.clearsSelectionOnViewWillAppear = false
  }
  
  override func viewWillAppear(_ animated: Bool) {
    super.viewWillAppear(animated)
    reloadWorkouts()
  }
    
  func reloadWorkouts() {
    
    WorkoutDataStore.loadPrancerciseWorkouts { (workouts, error) in
      self.workouts = workouts
      self.tableView.reloadData()
    }
  }
  
  //MARK: UITableView DataSource
  override func numberOfSections(in tableView: UITableView) -> Int {
    return 1
  }
  
  override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    
    guard let workouts = workouts else {
      return 0
    }
    
    return workouts.count
  }
  
  override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    
    guard let workouts = workouts else {
      fatalError("CellForRowAtIndexPath should never get called if there are no workouts")
    }
    
    //1. Get a cell to display the workout in.
    let cell = tableView.dequeueReusableCell(withIdentifier: prancerciseWorkoutCellID,
                                             for: indexPath)
    
    //2. Get the workout corresponding to this row.
    let workout = workouts[indexPath.row]
    
    //3. Show the workout's start date in the label.
    cell.textLabel?.text = dateFormatter.string(from: workout.startDate)
    
    //4. Show the Calorie burn in the lower label.
    if let caloriesBurned = workout.totalEnergyBurned?.doubleValue(for: HKUnit.kilocalorie()) {
      let formattedCalories = String(format: "CaloriesBurned: %.2f", caloriesBurned)
      cell.detailTextLabel?.text = formattedCalories
    } else {
      cell.detailTextLabel?.text = nil
    }
    
    return cell
  }
}
