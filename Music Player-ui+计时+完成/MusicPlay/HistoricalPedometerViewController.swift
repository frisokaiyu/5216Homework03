//
//  HistoricalPedometerViewContoller.swift
//  MusicPlay
//
//  Created by zhiliang_wang on 15/10/17.
//  Copyright © 2017 MAGNUMIUM. All rights reserved.
//

import CoreMotion;
import UIKit

class HistoricalPedometerViewController: UIViewController{
 
    @IBOutlet weak var resultsLabel: UILabel!
    
    @IBOutlet weak var timeRangeSegmentedControl: UISegmentedControl!
    // MARK: - Respond to User Actions
    @IBAction func timeRangeSelected(_ sender: UISegmentedControl) {
        selectedTimeRange = timeRangeSegmentedControl.selectedSegmentIndex as? CMDHistoricalTimeRange ?? CMDHistoricalTimeRange(rawValue: 0)!
        queryPedometerData()
    }
//    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//
//    }
//
//    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
//
//    }
    
    
    enum CMDHistoricalTimeRange : Int {
        case twelveHours = 0
        case threeDays
        case oneMonth
    }
        var selectedTimeRange = CMDHistoricalTimeRange(rawValue: 0)!
        var timeRangeFormatter: DateIntervalFormatter?
        // iOS 8+
        var stepCountFormatter: NumberFormatter?
        var distanceFormatter: LengthFormatter?
        // iOS 8+
        var pedometer: CMPedometer?
        
        // MARK: - View Controller Lifecycle
        
        override func viewDidLoad() {
            super.viewDidLoad()
            selectedTimeRange = .twelveHours
            timeRangeSegmentedControl.selectedSegmentIndex = selectedTimeRange.rawValue
            // These formatters could be instantiated lazily, but in this case, we know
            // they'll be used right away, so we might as well set them up.
            timeRangeFormatter = DateIntervalFormatter()
            timeRangeFormatter?.locale = NSLocale.autoupdatingCurrent
            timeRangeFormatter?.timeZone = NSTimeZone.local
            timeRangeFormatter?.dateStyle = .long
            timeRangeFormatter?.timeStyle = .short
            stepCountFormatter = NumberFormatter()
            stepCountFormatter?.locale = NSLocale.autoupdatingCurrent
            stepCountFormatter?.usesGroupingSeparator = true
            // not set by locale
            // unit depends on selected region, not language
            distanceFormatter = LengthFormatter()
            distanceFormatter?.unitStyle = .long
            distanceFormatter?.numberFormatter.locale = NSLocale.autoupdatingCurrent
            distanceFormatter?.numberFormatter.maximumFractionDigits = 2
            pedometer = CMPedometer()
            queryPedometerData()
        }
        
        override func didReceiveMemoryWarning() {
            super.didReceiveMemoryWarning()
            // Dispose of any resources that can be recreated.
        }
        
        // MARK: - Querying Pedometer Data
        func startDate(for timeRange: CMDHistoricalTimeRange) -> Date {
            // These date calculations are crude, and may not match the time ranges
            // all users expect. For a production app, consider assembling a start date
            // from NSDateComponents, along with NSLocale, NSCalendar, and NSTimeZone.
            var startDate: Date? = nil
            switch timeRange {
            case .twelveHours:
                startDate = Date().addingTimeInterval(-(12.0 * 60.0 * 60.0)) as? Date
            case .threeDays:
                startDate = Date().addingTimeInterval(-(3.0 * 24.0 * 60.0 * 60.0)) as? Date
            case .oneMonth:
                startDate = Date().addingTimeInterval(-(30.0 * 24.0 * 60.0 * 60.0)) as? Date
            default:
                print("WARNING: Unexpected time range index: \(Int((timeRange).rawValue))")
                startDate = Date()
            }
            return startDate ?? Date()
        }
        
        func queryPedometerData() {
            weak var weakSelf: HistoricalPedometerViewController? = self
            let handler = {(_ pedometerData: CMPedometerData, _ error: Error?) -> Void in
                let strongSelf: HistoricalPedometerViewController? = weakSelf
                if error != nil {
                    print("Historical pedometer updates failed with error: \(error?.localizedDescription)")
                    // switch to main queue if we're going to do anything with UIKit
                    DispatchQueue.main.async(execute: {() -> Void in
                        if strongSelf != nil {
                            self.resultsLabel.text = "There was an error."
                        }
                    })
                }
                else {
                    DispatchQueue.main.async(execute: {() -> Void in
                        if strongSelf != nil {
                            strongSelf?.handle(pedometerData)
                        }
                    })
                }
                } as? CMPedometerHandler
            
            let startDate = self.startDate(for: selectedTimeRange)
            pedometer?.queryPedometerData(from: startDate, to: Date(), withHandler: handler!) 	      // now
//            func queryStepCountStarting(from start: Date,
//                                        to end: Date,
//                                        to queue: OperationQueue,
//                                        withHandler handler: @escaping CMStepQueryHandler)
}
    // MARK: - Updating UI
    func handle(_ pmData: CMPedometerData) {
        print("Pedometer Data: \(pmData)")
        // Using NSDateIntervalFormatter (iOS 8+)
        let timeRangeString: String? = timeRangeFormatter?.string(from: pmData.startDate, to: pmData.endDate)
        // Using NSNumberFormatter
        let stepCountString: String? = stepCountFormatter?.string(from: pmData.numberOfSteps)
        let numberOfStepsString = "\(stepCountString) steps"
        // Using NSLengthFormatter (iOS 8+)
        let distanceInMeters: Double? = pmData.distance as! Double
        let distanceString: String? = distanceFormatter?.string(fromMeters: distanceInMeters!)
        var floorString: String
        if CMPedometer.isFloorCountingAvailable() {
            // simple string formatting. Could use NSLocalizedString for template.
            floorString = "Floors: \(pmData.floorsAscended) up, \(pmData.floorsDescended) down"
        }
        else {
            floorString = "(Floor counts not available on this device.)"
        }
        let resultStrings = [timeRangeString, "", numberOfStepsString, distanceString, floorString]
        resultsLabel?.text = (resultStrings as NSArray).componentsJoined(by: "\n")
    }
    
    
    
}



