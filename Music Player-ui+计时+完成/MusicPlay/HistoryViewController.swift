//
//  HistoryViewController.swift
//  Prancercise Tracker
//
//  Created by zhiliang_wang on 15/10/17.
//  Copyright © 2017 Razeware LLC. All rights reserved.
//

import UIKit

class HistoryViewController: UIViewController, UITableViewDataSource {
    // MARK: Properties
    
    static let textCellIdentifier = "HistoryCell"
    
    let motionManager = MotionManager()
    
    @IBOutlet weak var historyTableView: UITableView!
    
    /**
     An array of title / detail text label creation handlers. The left hand
     side string is the title of the label, while the right hand side is a closure
     that maps an `Activity` to some derived property of the activity to use
     in a text label.
     */
    let recentActivityItems: [(text: String, detailTextCreationHandler: (Activity) -> String)] = [
        ("Start Date",          { $0.startDateDescription }),
        ("End Date",            { $0.endDateDescription }),
        ("Duration",            { $0.activityDuration }),
        //("Pace Per Mile",       { $0.calculatedPace }),
        //("Distance (Miles)",    { $0.distanceInMiles }),
        ("Distance (Meters)",   { String($0.distance ?? 0) }),
        ("Number of Steps",     { String($0.numberOfSteps ?? 0) }),
        //("Floors Ascended",     { String($0.floorsAscended ?? 0) }),
        //("Floors Descended",    { String($0.floorsDescended ?? 0) })
    ]
    
    // MARK: View Controller
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setNeedsStatusBarAppearanceUpdate()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        // The `completionHandler` is executed on the main thread.
        motionManager.queryForRecentActivityData(historyTableView.reloadData)
    }
    
    // MARK: UITableViewDataSource
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return self.motionManager.recentActivities.count
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // This is the number of properties defined in `recentActivityItems(_:)`.
        let activity = motionManager.recentActivities[section].activity
        
        if activity.running || activity.walking {
            // Display all of the fields for running and walking.
            return recentActivityItems.count
        }
        else {
            // For all other activities only present Start Date, End Date, and Duration.
            return 3
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: HistoryViewController.textCellIdentifier, for: indexPath)
        
        let activity = motionManager.recentActivities[indexPath.section]
        
        let item = recentActivityItems[indexPath.row]
        
        cell.textLabel!.text = item.text
        cell.detailTextLabel!.text = item.detailTextCreationHandler(activity)
        cell.isUserInteractionEnabled = false
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return motionManager.recentActivities[section].activityType
    }
}
