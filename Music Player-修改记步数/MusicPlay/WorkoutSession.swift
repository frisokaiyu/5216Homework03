

import Foundation

enum WorkoutSessionState {
  case notStarted
  case active
  case finished
}

class WorkoutSession {
  
  private (set) var startDate: Date!
  private (set) var endDate: Date!
  
  var state: WorkoutSessionState = .notStarted
  
  var intervals = [PrancerciseWorkoutInterval]()
  
  func start() {
    startDate = Date()
    state = .active
  }
  
  func end() {
    endDate = Date()
    addNewInterval()
    state = .finished
  }
  
  func clear() {
    startDate = nil
    endDate = nil
    state = .notStarted
    intervals.removeAll()
  }
  
  private func addNewInterval() {
    let interval = PrancerciseWorkoutInterval(start: startDate,
                                              end: endDate)
    intervals.append(interval)
  }
  
  var completeWorkout: PrancerciseWorkout? {
    
    get {
      
      guard state == .finished,
            intervals.count > 0 else {
            return nil
      }
      
      return PrancerciseWorkout(with: intervals)
    }
  }
}
