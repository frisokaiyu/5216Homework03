ace.define("ace/mode/doc_comment_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules" ], function(e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("./text_highlight_rules").TextHighlightRules, s = function() {
        this.$rules = {
            start: [ {
                token: "comment.doc.tag",
                regex: "@[\\w\\d_]+"
            }, {
                token: "comment.doc.tag",
                regex: "\\bTODO\\b"
            }, {
                defaultToken: "comment.doc"
            } ]
        };
    };
    r.inherits(s, i), s.getStartRule = function(e) {
        return {
            token: "comment.doc",
            regex: "\\/\\*(?=\\*)",
            next: e
        };
    }, s.getEndRule = function(e) {
        return {
            token: "comment.doc",
            regex: "\\*\\/",
            next: e
        };
    }, t.DocCommentHighlightRules = s;
}), ace.define("ace/mode/swift_highlight_rules", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules" ], function(e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("./doc_comment_highlight_rules").DocCommentHighlightRules, s = e("./text_highlight_rules").TextHighlightRules, o = function() {
        var e = this.createKeywordMapper({
            "variable.language": "Int|Float|Double|String|Bool|Array|Dictionary|CBool|CChar|CUnsignedChar|CShort|CUnsignedShort|CLong|CUnsignedLong|CLongLong|CWideChar|CChar16|CChar32|CFloat|CDouble|AnyObject|IBOutlet|IBAction|BOOL|SEL|id|unichar|IMP|Class|UIWindow|UIWebView|UIVisualEffectView|UIVisualEffect|UIViewPrintFormatter|UIViewController|UIView|UIVideoEditorController|UIVibrancyEffect|UIUserNotificationSettings|UIUserNotificationCategory|UIUserNotificationAction|UITraitCollection|UITouch|UIToolbar|UITextView|UITextSelectionRect|UITextRange|UITextPosition|UITextInputTokenizer|UITextInputStringTokenizer|UITextInputMode|UITextField|UITextChecker|UITapGestureRecognizer|UITableViewRowAction|UITableViewHeaderFooterView|UITableViewController|UITableViewCell|UITableView|UITabBarItem|UITabBarController|UITabBar|UISwitch|UISwipeGestureRecognizer|UIStoryboardSegue|UIStoryboardPopoverSegue|UIStoryboard|UIStepper|UISplitViewController|UISnapBehavior|UISlider|UISimpleTextPrintFormatter|UISegmentedControl|UISearchDisplayController|UISearchController|UISearchBar|UIScrollView|UIScreenMode|UIScreenEdgePanGestureRecognizer|UIScreen|UIRotationGestureRecognizer|UIResponder|UIRefreshControl|UIReferenceLibraryViewController|UIPushBehavior|UIProgressView|UIPrintPaper|UIPrintPageRenderer|UIPrintInteractionController|UIPrintInfo|UIPrintFormatter|UIPrinterPickerController|UIPrinter|UIPresentationController|UIPopoverPresentationController|UIPopoverController|UIPopoverBackgroundView|UIPinchGestureRecognizer|UIPickerView|UIPercentDrivenInteractiveTransition|UIPasteboard|UIPanGestureRecognizer|UIPageViewController|UIPageControl|UINib|UINavigationItem|UINavigationController|UINavigationBar|UIMutableUserNotificationCategory|UIMutableUserNotificationAction|UIMotionEffectGroup|UIMotionEffect|UIMenuItem|UIMenuController|UIMarkupTextPrintFormatter|UIManagedDocument|UILongPressGestureRecognizer|UILocalNotification|UILocalizedIndexedCollation|UILexiconEntry|UILexicon|UILabel|UIKit|UIKeyCommand|UIInterpolatingMotionEffect|UIInputViewController|UIInputView|UIImageView|UIImagePickerController|UIImageAsset|UIImage|UIGravityBehavior|UIGestureRecognizer|UIFontDescriptor|UIFont|UIEvent|UIDynamicItemBehavior|UIDynamicBehavior|UIDynamicAnimator|UIDocumentPickerViewController|UIDocumentPickerExtensionViewController|UIDocumentMenuViewController|UIDocumentInteractionController|UIDocument|UIDictationPhrase|UIDevice|UIDatePicker|UIControl|UIColor|UICollisionBehavior|UICollectionViewUpdateItem|UICollectionViewTransitionLayout|UICollectionViewLayoutInvalidationContext|UICollectionViewLayoutAttributes|UICollectionViewLayout|UICollectionViewFlowLayoutInvalidationContext|UICollectionViewFlowLayout|UICollectionViewController|UICollectionViewCell|UICollectionView|UICollectionReusableView|UIButton|UIBlurEffect|UIBezierPath|UIBarItem|UIBarButtonItem|UIAttachmentBehavior|UIApplication|UIAlertView|UIAlertController|UIAlertAction|UIActivityViewController|UIActivityItemProvider|UIActivityIndicatorView|UIActivity|UIActionSheet|UIAccessibilityElement|UIAccessibilityCustomAction|UIAccelerometer|UIAcceleration|SLRequest|SLComposeViewController|SLComposeSheetConfigurationItem|SLComposeServiceViewController|SKView|SKVideoNode|SKUniform|SKTransition|SKTextureAtlas|SKTexture|SKSpriteNode|SKShapeNode|SKShader|SKScene|SKRegion|SKReachConstraints|SKRange|SKPhysicsWorld|SKPhysicsJointSpring|SKPhysicsJointSliding|SKPhysicsJointPin|SKPhysicsJointLimit|SKPhysicsJointFixed|SKPhysicsJoint|SKPhysicsContact|SKPhysicsBody|SKNode|SKMutableTexture|SKLightNode|SKLabelNode|SKKeyframeSequence|SKFieldNode|SKEmitterNode|SKEffectNode|SKCropNode|SKConstraint|SKAction|SCNView|SCNTube|SCNTransformConstraint|SCNTransaction|SCNTorus|SCNText|SCNTechnique|SCNSphere|SCNSkinner|SCNShape|SCNSceneSource|SCNScene|SCNRenderer|SCNPyramid|SCNProgram|SCNPlane|SCNPhysicsWorld|SCNPhysicsVehicleWheel|SCNPhysicsVehicle|SCNPhysicsSliderJoint|SCNPhysicsShape|SCNPhysicsHingeJoint|SCNPhysicsField|SCNPhysicsContact|SCNPhysicsBody|SCNPhysicsBehavior|SCNPhysicsBallSocketJoint|SCNParticleSystem|SCNParticlePropertyController|SCNNode|SCNMorpher|SCNMaterialProperty|SCNMaterial|SCNLookAtConstraint|SCNLight|SCNLevelOfDetail|SCNIKConstraint|SCNHitTestResult|SCNGeometrySource|SCNGeometryElement|SCNGeometry|SCNFloor|SCNCylinder|SCNConstraint|SCNCone|SCNCapsule|SCNCamera|SCNBox|SCNAnimationEvent|SCNAction|PKShippingMethod|PKPaymentToken|PKPaymentSummaryItem|PKPaymentRequest|PKPaymentPass|PKPaymentButton|PKPaymentAuthorizationViewController|PKPayment|PKPassLibrary|PKPass|PKObject|PKAddPassesViewController|NSZone|NSXPCListenerEndpoint|NSXPCListener|NSXPCInterface|NSXPCConnection|NSXMLParser|NSXMLNode|NSXMLElement|NSXMLDTDNode|NSXMLDTD|NSXMLDocument|NSWorkspace|NSWindowController|NSWindow|NSWhoseSpecifier|NSVisualEffectView|NSViewController|NSViewAnimation|NSView|NSValueTransformer|NSValue|NSUUID|NSUserUnixTask|NSUserScriptTask|NSUserNotificationCenter|NSUserNotificationAction|NSUserNotification|NSUserDefaultsController|NSUserDefaults|NSUserAutomatorTask|NSUserAppleScriptTask|NSUserActivity|NSURLSessionUploadTask|NSURLSessionTask|NSURLSessionDownloadTask|NSURLSessionDataTask|NSURLSessionConfiguration|NSURLSession|NSURLResponse|NSURLRequest|NSURLQueryItem|NSURLProtocol|NSURLProtectionSpace|NSURLHandle|NSURLDownload|NSURLCredentialStorage|NSURLCredential|NSURLConnection|NSURLComponents|NSURLCache|NSURLAuthenticationChallenge|NSURL|NSUniqueIDSpecifier|NSUndoManager|NSUncaughtExceptionHandler|NSUnarchiver|NSUInteger|NSUbiquitousKeyValueStore|NSTypesetter|NSTreeNode|NSTreeController|NSTrackingArea|NSTouch|NSToolbarItemGroup|NSToolbarItem|NSToolbar|NSTokenFieldCell|NSTokenField|NSTitlebarAccessoryViewController|NSTimeZone|NSTimer|NSTimeInterval|NSThread|NSTextView|NSTextTableBlock|NSTextTable|NSTextTab|NSTextStorage|NSTextList|NSTextInputContext|NSTextFinder|NSTextFieldCell|NSTextField|NSTextContainer|NSTextCheckingResult|NSTextBlock|NSTextAttachmentCell|NSTextAttachment|NSTextAlternatives|NSText|NSTask|NSTabViewItem|NSTabViewController|NSTabView|NSTableView|NSTableRowView|NSTableHeaderView|NSTableHeaderCell|NSTableColumn|NSTableCellView|NSSwappedFloat|NSSwappedDouble|NSStringEncoding|NSString|NSStream|NSStoryboardSegue|NSStoryboard|NSStepperCell|NSStepper|NSStatusItem|NSStatusBarButton|NSStatusBar|NSStackView|NSSplitViewItem|NSSplitViewController|NSSplitView|NSSpellServer|NSSpellChecker|NSSpeechSynthesizer|NSSpeechRecognizer|NSSpecifierTest|NSSound|NSSortDescriptor|NSSocketPortNameServer|NSSocketPort|NSSocketNativeHandle|NSSliderCell|NSSlider|NSSize|NSSharingServicePicker|NSSharingService|NSShadow|NSSetCommand|NSSet|NSSegmentedControl|NSSegmentedCell|NSSecureTextFieldCell|NSSecureTextField|NSSearchFieldCell|NSSearchField|NSScrollView|NSScroller|NSScriptWhoseTest|NSScriptSuiteRegistry|NSScriptObjectSpecifier|NSScriptExecutionContext|NSScriptCommandDescription|NSScriptCommand|NSScriptCoercionHandler|NSScriptClassDescription|NSScreen|NSScanner|NSSavePanel|NSSaveChangesRequest|NSRunningApplication|NSRunLoop|NSRulerView|NSRulerMarker|NSRuleEditor|NSRotationGestureRecognizer|NSResponder|NSRelativeSpecifier|NSRelationshipDescription|NSRegularExpression|NSRecursiveLock|NSRangeSpecifier|NSRangePointer|NSRange|NSRandomSpecifier|NSQuitCommand|NSQuickDrawView|NSPurgeableData|NSProxy|NSProtocolChecker|NSPropertySpecifier|NSPropertyMapping|NSPropertyListSerialization|NSPropertyDescription|NSProgressIndicator|NSProgress|NSProcessInfo|NSPrintPanel|NSPrintOperation|NSPrintInfo|NSPrinter|NSPressGestureRecognizer|NSPredicateEditorRowTemplate|NSPredicateEditor|NSPredicate|NSPositionalSpecifier|NSPortNameServer|NSPortMessage|NSPortCoder|NSPort|NSPopUpButtonCell|NSPopUpButton|NSPopover|NSPointerFunctions|NSPointerArray|NSPipe|NSPICTImageRep|NSPersistentStoreResult|NSPersistentStoreRequest|NSPersistentStoreCoordinator|NSPersistentStoreAsynchronousResult|NSPersistentStore|NSPersistentDocument|NSPDFPanel|NSPDFInfo|NSPDFImageRep|NSPathControlItem|NSPathControl|NSPathComponentCell|NSPathCell|NSPasteboardItem|NSPasteboard|NSParagraphStyle|NSPanGestureRecognizer|NSPanel|NSPageLayout|NSPageController|NSOutputStream|NSOutlineView|NSOrthography|NSOrderedSet|NSOperationQueue|NSOperation|NSOpenPanel|NSOpenGLView|NSOpenGLPixelFormat|NSOpenGLPixelBuffer|NSOpenGLLayer|NSOpenGLContext|NSObjectController|NSObject|NSNumberFormatter|NSNumber|NSNull|NSNotificationQueue|NSNotificationCenter|NSNotification|NSNibOutletConnector|NSNibControlConnector|NSNibConnector|NSNib|NSNetServiceBrowser|NSNetService|NSNameSpecifier|NSMutableURLRequest|NSMutableString|NSMutableSet|NSMutableParagraphStyle|NSMutableOrderedSet|NSMutableIndexSet|NSMutableFontCollection|NSMutableDictionary|NSMutableData|NSMutableCharacterSet|NSMutableAttributedString|NSMutableArray|NSMovieView|NSMovie|NSMoveCommand|NSMigrationManager|NSMiddleSpecifier|NSMethodSignature|NSMetadataQueryResultGroup|NSMetadataQueryAttributeValueTuple|NSMetadataQuery|NSMetadataItem|NSMessagePortNameServer|NSMessagePort|NSMergePolicy|NSMergeConflict|NSMenuView|NSMenuItemCell|NSMenuItem|NSMenu|NSMediaLibraryBrowserController|NSMatrix|NSMassFormatter|NSMapTableOptions|NSMapTable|NSMappingModel|NSManagedObjectModel|NSManagedObjectID|NSManagedObjectContext|NSManagedObject|NSMagnificationGestureRecognizer|NSMachPort|NSMachBootstrapServer|NSLogicalTest|NSLock|NSLocale|NSLinguisticTagger|NSLevelIndicatorCell|NSLevelIndicator|NSLengthFormatter|NSLayoutManager|NSLayoutConstraint|NSKeyedUnarchiver|NSKeyedArchiver|NSJSONSerialization|NSItemProvider|NSInvocationOperation|NSInvocation|NSInteger|NSInputStream|NSInputServer|NSInputManager|NSIndexSpecifier|NSIndexSet|NSIndexPath|NSIncrementalStoreNode|NSIncrementalStore|NSImageView|NSImageRep|NSImageCell|NSImage|NSHTTPURLResponse|NSHTTPCookieStorage|NSHTTPCookie|NSHost|NSHelpManager|NSHashTableOptions|NSHashTable|NSGraphicsContext|NSGradient|NSGlyphInfoAttributeName|NSGlyphInfo|NSGlyphGenerator|NSGetCommand|NSGestureRecognizer|NSGarbageCollector|NSFormCell|NSFormatter|NSForm|NSFontPanel|NSFontManager|NSFontDescriptor|NSFontCollection|NSFont|NSFileWrapper|NSFileVersion|NSFileSecurity|NSFileManager|NSFileHandle|NSFileCoordinator|NSFileAccessIntent|NSFetchRequestExpression|NSFetchRequest|NSFetchedPropertyDescription|NSExtensionItem|NSExtensionContext|NSExpressionDescription|NSExpression|NSExistsCommand|NSException|NSEvent|NSError|NSEPSImageRep|NSEnumerator|NSEntityMigrationPolicy|NSEntityMapping|NSEntityDescription|NSEnergyFormatter|NSEditorRegistration|NSEditor|NSDrawer|NSDraggingSession|NSDraggingItem|NSDraggingImageComponent|NSDocumentController|NSDocument|NSDockTile|NSDistributedNotificationCenter|NSDistributedLock|NSDistantObjectRequest|NSDistantObject|NSDirectoryEnumerator|NSDictionaryController|NSDictionary|NSDeleteCommand|NSDecimalNumberHandler|NSDecimalNumberBehaviors|NSDecimalNumber|NSDecimal|NSDatePickerCell|NSDatePicker|NSDateIntervalFormatter|NSDateFormatter|NSDateComponentsFormatter|NSDateComponents|NSDate|NSDataDetector|NSData|NSCustomImageRep|NSCursor|NSCreateCommand|NSCountedSet|NSCountCommand|NSController|NSControl|NSConnection|NSConditionLock|NSCondition|NSCompoundPredicate|NSComparisonPredicate|NSComparator|NSComboBoxCell|NSComboBox|NSColorWell|NSColorSpace|NSColorPickingDefault|NSColorPicker|NSColorPanel|NSColorList|NSColor|NSCollectionViewItem|NSCollectionView|NSCoder|NSCloseCommand|NSCloneCommand|NSClipView|NSClickGestureRecognizer|NSClassDescription|NSCIImageRep|NSCharacterSet|NSCell|NSCalendarDate|NSCalendar|NSCachedURLResponse|NSCachedImageRep|NSCache|NSByteCountFormatter|NSButtonCell|NSButton|NSBundle|NSBrowserCell|NSBrowser|NSBox|NSBlockOperation|NSBitmapImageRep|NSBezierPath|NSBatchUpdateResult|NSBatchUpdateRequest|NSBackgroundActivityScheduler|NSAutoreleasePool|NSAttributedString|NSAttributeDescription|NSAttachmentAttributeName|NSATSTypesetter|NSAtomicStoreCacheNode|NSAtomicStore|NSAsynchronousFetchResult|NSAsynchronousFetchRequest|NSAssertionHandler|NSArrayController|NSArray|NSArchiver|NSApplication|NSAppleScript|NSAppleEventManager|NSAppleEventDescriptor|NSAppearance|NSAnimationContext|NSAnimation|NSAlert|NSAffineTransform|NSActionCell|NSAccessibilityElement|NKLibrary|NKIssue|NKAssetDownload|NCWidgetController|MTLVertexDescriptor|MTLVertexBufferLayoutDescriptorArray|MTLVertexBufferLayoutDescriptor|MTLVertexAttributeDescriptorArray|MTLVertexAttributeDescriptor|MTLVertexAttribute|MTLTextureDescriptor|MTLStructType|MTLStructMember|MTLStencilDescriptor|MTLSamplerDescriptor|MTLRenderPipelineState|MTLRenderPipelineReflection|MTLRenderPipelineDescriptor|MTLRenderPipelineColorAttachmentDescriptorArray|MTLRenderPipelineColorAttachmentDescriptor|MTLRenderPassStencilAttachmentDescriptor|MTLRenderPassDescriptor|MTLRenderPassDepthAttachmentDescriptor|MTLRenderPassColorAttachmentDescriptorArray|MTLRenderPassColorAttachmentDescriptor|MTLRenderPassAttachmentDescriptor|MTLDepthStencilDescriptor|MTLComputePipelineState|MTLComputePipelineReflection|MTLCompileOptions|MTLArrayType|MTLArgument|MKUserTrackingBarButtonItem|MKUserLocation|MKTileOverlayRenderer|MKTileOverlay|MKShape|MKRouteStep|MKRoute|MKReverseGeocoder|MKPolylineView|MKPolylineRenderer|MKPolyline|MKPolygonView|MKPolygonRenderer|MKPolygon|MKPointAnnotation|MKPlacemark|MKPinAnnotationView|MKOverlayView|MKOverlayRenderer|MKOverlayPathView|MKOverlayPathRenderer|MKMultiPoint|MKMapView|MKMapSnapshotter|MKMapSnapshotOptions|MKMapSnapshot|MKMapItem|MKMapCamera|MKLocalSearchResponse|MKLocalSearchRequest|MKLocalSearch|MKGeodesicPolyline|MKETAResponse|MKDistanceFormatter|MKDirectionsResponse|MKDirectionsRequest|MKDirections|MKCircleView|MKCircleRenderer|MKCircle|MKAnnotationView|LAContext|HKWorkoutType|HKWorkoutEvent|HKWorkout|HKUnit|HKStatisticsQuery|HKStatisticsCollectionQuery|HKStatisticsCollection|HKStatistics|HKSourceQuery|HKSource|HKSampleType|HKSampleQuery|HKSample|HKQuery|HKQuantityType|HKQuantitySample|HKQuantity|HKObserverQuery|HKObjectType|HKObject|HKHealthStore|HKCorrelationType|HKCorrelationQuery|HKCorrelation|HKCharacteristicType|HKCategoryType|HKCategorySample|HKBloodTypeObject|HKBloodType|HKBiologicalSexObject|HKBiologicalSex|HKAnchoredObjectQuery|GLKViewController|GLKView|GLKTextureLoader|GLKTextureInfo|GLKSkyboxEffect|GLKReflectionMapEffect|GLKEffectPropertyTransform|GLKEffectPropertyTexture|GLKEffectPropertyMaterial|GLKEffectPropertyLight|GLKEffectPropertyFog|GLKEffectProperty|GLKBaseEffect|GKVoiceChatService|GKVoiceChat|GKTurnBasedParticipant|GKTurnBasedMatchmakerViewController|GKTurnBasedMatch|GKTurnBasedExchangeReply|GKTurnBasedExchange|GKTurnBasedEventHandler|GKSession|GKScoreChallenge|GKScore|GKSavedGame|GKPlayer|GKPeerPickerController|GKNotificationBanner|GKMatchRequest|GKMatchmakerViewController|GKMatchmaker|GKMatch|GKLocalPlayer|GKLeaderboardViewController|GKLeaderboardSet|GKLeaderboard|GKInvite|GKGameCenterViewController|GKFriendRequestComposeViewController|GKChallengeEventHandler|GKChallenge|GKAchievementViewController|GKAchievementDescription|GKAchievementChallenge|GKAchievement|CLVisit|CLRegion|CLPlacemark|CLLocationManager|CLLocation|CLKTimeTextProvider|CLKTimeIntervalTextProvider|CLKTextProvider|CLKSimpleTextProvider|CLKRelativeDateTextProvider|CLKImageProvider|CLKDateTextProvider|CLKComplicationTimelineEntry|CLKComplicationTemplateUtilitarianSmallSquare|CLKComplicationTemplateUtilitarianSmallRingText|CLKComplicationTemplateUtilitarianSmallRingImage|CLKComplicationTemplateUtilitarianSmallFlat|CLKComplicationTemplateUtilitarianLargeFlat|CLKComplicationTemplateModularSmallStackText|CLKComplicationTemplateModularSmallStackImage|CLKComplicationTemplateModularSmallSimpleText|CLKComplicationTemplateModularSmallSimpleImage|CLKComplicationTemplateModularSmallRingText|CLKComplicationTemplateModularSmallRingImage|CLKComplicationTemplateModularSmallColumnsText|CLKComplicationTemplateModularLargeTallBody|CLKComplicationTemplateModularLargeTable|CLKComplicationTemplateModularLargeStandardBody|CLKComplicationTemplateModularLargeColumns|CLKComplicationTemplateCircularSmallStackText|CLKComplicationTemplateCircularSmallStackImage|CLKComplicationTemplateCircularSmallSimpleText|CLKComplicationTemplateCircularSmallSimpleImage|CLKComplicationTemplateCircularSmallRingText|CLKComplicationTemplateCircularSmallRingImage|CLKComplicationTemplate|CLKComplicationServer|CLKComplication|CLHeading|CLGeocoder|CLFloor|CLCircularRegion|CLBeaconRegion|CLBeacon|CKSubscription|CKServerChangeToken|CKReference|CKRecordZoneNotification|CKRecordZoneID|CKRecordZone|CKRecordID|CKRecord|CKQueryOperation|CKQueryNotification|CKQueryCursor|CKQuery|CKOperation|CKNotificationInfo|CKNotificationID|CKNotification|CKModifySubscriptionsOperation|CKModifyRecordZonesOperation|CKModifyRecordsOperation|CKModifyBadgeOperation|CKMarkNotificationsReadOperation|CKLocationSortDescriptor|CKFetchSubscriptionsOperation|CKFetchRecordZonesOperation|CKFetchRecordsOperation|CKFetchRecordChangesOperation|CKFetchNotificationChangesOperation|CKDiscoverUserInfosOperation|CKDiscoveredUserInfo|CKDiscoverAllContactsOperation|CKDatabaseOperation|CKDatabase|CKContainer|CKAsset|CFWriteStream|CFUUID|CFURL|CFType|CFTree|CFTimeZone|CFStringTokenizer|CFString|CFSocket|CFSet|CFRunLoopTimer|CFRunLoopSource|CFRunLoopObserver|CFRunLoop|CFReadStream|CFPropertyList|CFPlugInInstance|CFPlugin|CFPlugIn|CFNumberFormatter|CFNumber|CFNull|CFNotificationCenter|CFNetServices|CFNetDiagnostics|CFMutableString|CFMutableSet|CFMutableDictionary|CFMutableData|CFMutableCharacterSet|CFMutableBitVector|CFMutableBag|CFMutableAttributedString|CFMutableArray|CFMessagePort|CFMachPort|CFLocale|CFHTTPStream|CFHTTPMessage|CFHTTPAuthentication|CFHost|CFFTPStream|CFFileDescriptor|CFError|CFDictionary|CFDateFormatter|CFDate|CFData|CFCharacterSet|CFCalendar|CFBundle|CFBoolean|CFBitVector|CFBinaryHeap|CFBag|CFAttributedString|CFArray|CFAllocator|CBUUID|CBService|CBPeripheralManager|CBPeripheral|CBPeer|CBMutableService|CBMutableDescriptor|CBMutableCharacteristic|CBDescriptor|CBCharacteristic|CBCentralManager|CBCentral|CBAttribute|CBATTRequest",
            keyword: "break|case|deinit|continue|init|default|do|else|import|fallthrough|let|for|if|in|return|switch|where|while|as|dynamicType|is|self|Self|super|__COLUMN__|__FILE__|__FUNCTION__|__LINE__",
            "storage.type": "class|enum|extension|func|internal|operator|private|protocol|public|static|struct|subscript|typealias|var",
            "constant.language": "nil",
            "support.function": "",
            "constant.language.boolean": "true|false"
        }, "identifier"), t = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void", n = "[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b", r = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)";
        this.$rules = {
            no_regex: [ {
                token: "comment",
                regex: "\\/\\/",
                next: "line_comment"
            }, i.getStartRule("doc-start"), {
                token: "comment",
                regex: /\/\*/,
                next: "comment"
            }, {
                token: "string",
                regex: "'(?=.)",
                next: "qstring"
            }, {
                token: "string",
                regex: '"(?=.)',
                next: "qqstring"
            }, {
                token: "constant.numeric",
                regex: /0[xX][0-9a-fA-F]+\b/
            }, {
                token: "constant.numeric",
                regex: /[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
            }, {
                token: [ "storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator" ],
                regex: "(" + n + ")(\\.)(prototype)(\\.)(" + n + ")(\\s*)(=)",
                next: "function_arguments"
            }, {
                token: [ "storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen" ],
                regex: "(" + n + ")(\\.)(" + n + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: [ "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen" ],
                regex: "(" + n + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: [ "storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen" ],
                regex: "(" + n + ")(\\.)(" + n + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: [ "storage.type", "text", "entity.name.function", "text", "paren.lparen" ],
                regex: "(function)(\\s+)(" + n + ")(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: [ "entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen" ],
                regex: "(" + n + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: [ "text", "text", "storage.type", "text", "paren.lparen" ],
                regex: "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: "keyword",
                regex: "(?:" + t + ")\\b",
                next: "start"
            }, {
                token: [ "punctuation.operator", "support.function" ],
                regex: /(\.)(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            }, {
                token: [ "punctuation.operator", "support.function.dom" ],
                regex: /(\.)(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            }, {
                token: [ "punctuation.operator", "support.constant" ],
                regex: /(\.)(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            }, {
                token: [ "support.constant" ],
                regex: /that\b/
            }, {
                token: [ "storage.type", "punctuation.operator", "support.function.firebug" ],
                regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
            }, {
                token: e,
                regex: n
            }, {
                token: "keyword.operator",
                regex: /--|\+\+|[!$%&*+\-~]|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|\*=|%=|\+=|\-=|&=|\^=/,
                next: "start"
            }, {
                token: "punctuation.operator",
                regex: /\?|\:|\,|\;|\./,
                next: "start"
            }, {
                token: "paren.lparen",
                regex: /[\[({]/,
                next: "start"
            }, {
                token: "paren.rparen",
                regex: /[\])}]/
            }, {
                token: "keyword.operator",
                regex: /\/=?/,
                next: "start"
            }, {
                token: "comment",
                regex: /^#!.*$/
            } ],
            start: [ i.getStartRule("doc-start"), {
                token: "comment",
                regex: "\\/\\*",
                next: "comment_regex_allowed"
            }, {
                token: "comment",
                regex: "\\/\\/",
                next: "line_comment_regex_allowed"
            }, {
                token: "string.regexp",
                regex: "\\/",
                next: "regex"
            }, {
                token: "text",
                regex: "\\s+|^$",
                next: "start"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            } ],
            regex: [ {
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
            }, {
                token: "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                token: "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                token: "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp"
            } ],
            regex_character_class: [ {
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp.charachterclass"
            } ],
            function_arguments: [ {
                token: "variable.parameter",
                regex: n
            }, {
                token: "punctuation.operator",
                regex: "[, ]+"
            }, {
                token: "punctuation.operator",
                regex: "$"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            } ],
            comment_regex_allowed: [ {
                token: "comment",
                regex: "\\*\\/",
                next: "start"
            }, {
                defaultToken: "comment"
            } ],
            comment: [ {
                token: "comment",
                regex: "\\*\\/",
                next: "no_regex"
            }, {
                defaultToken: "comment"
            } ],
            line_comment_regex_allowed: [ {
                token: "comment",
                regex: "$|^",
                next: "start"
            }, {
                defaultToken: "comment"
            } ],
            line_comment: [ {
                token: "comment",
                regex: "$|^",
                next: "no_regex"
            }, {
                defaultToken: "comment"
            } ],
            qqstring: [ {
                token: "constant.language.escape",
                regex: r
            }, {
                token: "string",
                regex: "\\\\$",
                next: "qqstring"
            }, {
                token: "string",
                regex: '"|$',
                next: "no_regex"
            }, {
                defaultToken: "string"
            } ],
            qstring: [ {
                token: "constant.language.escape",
                regex: r
            }, {
                token: "string",
                regex: "\\\\$",
                next: "qstring"
            }, {
                token: "string",
                regex: "'|$",
                next: "no_regex"
            }, {
                defaultToken: "string"
            } ]
        }, this.embedRules(i, "doc-", [ i.getEndRule("no_regex") ]);
    };
    r.inherits(o, s), t.swiftHighlightRules = o;
}), ace.define("ace/mode/matching_brace_outdent", [ "require", "exports", "module", "ace/range" ], function(e, t, n) {
    "use strict";
    var r = e("../range").Range, i = function() {};
    (function() {
        this.checkOutdent = function(e, t) {
            return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1;
        }, this.autoOutdent = function(e, t) {
            var n = e.getLine(t), i = n.match(/^(\s*\})/);
            if (!i) return 0;
            var s = i[1].length, o = e.findMatchingBracket({
                row: t,
                column: s
            });
            if (!o || o.row == t) return 0;
            var u = this.$getIndent(e.getLine(o.row));
            e.replace(new r(t, 0, t, s - 1), u);
        }, this.$getIndent = function(e) {
            return e.match(/^\s*/)[0];
        };
    }).call(i.prototype), t.MatchingBraceOutdent = i;
}), ace.define("ace/mode/behaviour/cstyle", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang" ], function(e, t, n) {
    "use strict";
    var r = e("../../lib/oop"), i = e("../behaviour").Behaviour, s = e("../../token_iterator").TokenIterator, o = e("../../lib/lang"), u = [ "text", "paren.rparen", "punctuation.operator" ], a = [ "text", "paren.rparen", "punctuation.operator", "comment" ], f, l = {}, c = function(e) {
        var t = -1;
        e.multiSelect && (t = e.selection.id, l.rangeCount != e.multiSelect.rangeCount && (l = {
            rangeCount: e.multiSelect.rangeCount
        }));
        if (l[t]) return f = l[t];
        f = l[t] = {
            autoInsertedBrackets: 0,
            autoInsertedRow: -1,
            autoInsertedLineEnd: "",
            maybeInsertedBrackets: 0,
            maybeInsertedRow: -1,
            maybeInsertedLineStart: "",
            maybeInsertedLineEnd: ""
        };
    }, h = function() {
        this.add("braces", "insertion", function(e, t, n, r, i) {
            var s = n.getCursorPosition(), u = r.doc.getLine(s.row);
            if (i == "{") {
                c(n);
                var a = n.getSelectionRange(), l = r.doc.getTextRange(a);
                if (l !== "" && l !== "{" && n.getWrapBehavioursEnabled()) return {
                    text: "{" + l + "}",
                    selection: !1
                };
                if (h.isSaneInsertion(n, r)) return /[\]\}\)]/.test(u[s.column]) || n.inMultiSelectMode ? (h.recordAutoInsert(n, r, "}"), 
                {
                    text: "{}",
                    selection: [ 1, 1 ]
                }) : (h.recordMaybeInsert(n, r, "{"), {
                    text: "{",
                    selection: [ 1, 1 ]
                });
            } else if (i == "}") {
                c(n);
                var p = u.substring(s.column, s.column + 1);
                if (p == "}") {
                    var d = r.$findOpeningBracket("}", {
                        column: s.column + 1,
                        row: s.row
                    });
                    if (d !== null && h.isAutoInsertedClosing(s, u, i)) return h.popAutoInsertedClosing(), 
                    {
                        text: "",
                        selection: [ 1, 1 ]
                    };
                }
            } else {
                if (i == "\n" || i == "\r\n") {
                    c(n);
                    var v = "";
                    h.isMaybeInsertedClosing(s, u) && (v = o.stringRepeat("}", f.maybeInsertedBrackets), 
                    h.clearMaybeInsertedClosing());
                    var p = u.substring(s.column, s.column + 1);
                    if (p === "}") {
                        var m = r.findMatchingBracket({
                            row: s.row,
                            column: s.column + 1
                        }, "}");
                        if (!m) return null;
                        var g = this.$getIndent(r.getLine(m.row));
                    } else {
                        if (!v) {
                            h.clearMaybeInsertedClosing();
                            return;
                        }
                        var g = this.$getIndent(u);
                    }
                    var y = g + r.getTabString();
                    return {
                        text: "\n" + y + "\n" + g + v,
                        selection: [ 1, y.length, 1, y.length ]
                    };
                }
                h.clearMaybeInsertedClosing();
            }
        }), this.add("braces", "deletion", function(e, t, n, r, i) {
            var s = r.doc.getTextRange(i);
            if (!i.isMultiLine() && s == "{") {
                c(n);
                var o = r.doc.getLine(i.start.row), u = o.substring(i.end.column, i.end.column + 1);
                if (u == "}") return i.end.column++, i;
                f.maybeInsertedBrackets--;
            }
        }), this.add("parens", "insertion", function(e, t, n, r, i) {
            if (i == "(") {
                c(n);
                var s = n.getSelectionRange(), o = r.doc.getTextRange(s);
                if (o !== "" && n.getWrapBehavioursEnabled()) return {
                    text: "(" + o + ")",
                    selection: !1
                };
                if (h.isSaneInsertion(n, r)) return h.recordAutoInsert(n, r, ")"), {
                    text: "()",
                    selection: [ 1, 1 ]
                };
            } else if (i == ")") {
                c(n);
                var u = n.getCursorPosition(), a = r.doc.getLine(u.row), f = a.substring(u.column, u.column + 1);
                if (f == ")") {
                    var l = r.$findOpeningBracket(")", {
                        column: u.column + 1,
                        row: u.row
                    });
                    if (l !== null && h.isAutoInsertedClosing(u, a, i)) return h.popAutoInsertedClosing(), 
                    {
                        text: "",
                        selection: [ 1, 1 ]
                    };
                }
            }
        }), this.add("parens", "deletion", function(e, t, n, r, i) {
            var s = r.doc.getTextRange(i);
            if (!i.isMultiLine() && s == "(") {
                c(n);
                var o = r.doc.getLine(i.start.row), u = o.substring(i.start.column + 1, i.start.column + 2);
                if (u == ")") return i.end.column++, i;
            }
        }), this.add("brackets", "insertion", function(e, t, n, r, i) {
            if (i == "[") {
                c(n);
                var s = n.getSelectionRange(), o = r.doc.getTextRange(s);
                if (o !== "" && n.getWrapBehavioursEnabled()) return {
                    text: "[" + o + "]",
                    selection: !1
                };
                if (h.isSaneInsertion(n, r)) return h.recordAutoInsert(n, r, "]"), {
                    text: "[]",
                    selection: [ 1, 1 ]
                };
            } else if (i == "]") {
                c(n);
                var u = n.getCursorPosition(), a = r.doc.getLine(u.row), f = a.substring(u.column, u.column + 1);
                if (f == "]") {
                    var l = r.$findOpeningBracket("]", {
                        column: u.column + 1,
                        row: u.row
                    });
                    if (l !== null && h.isAutoInsertedClosing(u, a, i)) return h.popAutoInsertedClosing(), 
                    {
                        text: "",
                        selection: [ 1, 1 ]
                    };
                }
            }
        }), this.add("brackets", "deletion", function(e, t, n, r, i) {
            var s = r.doc.getTextRange(i);
            if (!i.isMultiLine() && s == "[") {
                c(n);
                var o = r.doc.getLine(i.start.row), u = o.substring(i.start.column + 1, i.start.column + 2);
                if (u == "]") return i.end.column++, i;
            }
        }), this.add("string_dquotes", "insertion", function(e, t, n, r, i) {
            if (i == '"' || i == "'") {
                c(n);
                var s = i, o = n.getSelectionRange(), u = r.doc.getTextRange(o);
                if (u !== "" && u !== "'" && u != '"' && n.getWrapBehavioursEnabled()) return {
                    text: s + u + s,
                    selection: !1
                };
                var a = n.getCursorPosition(), f = r.doc.getLine(a.row), l = f.substring(a.column - 1, a.column);
                if (l == "\\") return null;
                var p = r.getTokens(o.start.row), d = 0, v, m = -1;
                for (var g = 0; g < p.length; g++) {
                    v = p[g], v.type == "string" ? m = -1 : m < 0 && (m = v.value.indexOf(s));
                    if (v.value.length + d > o.start.column) break;
                    d += p[g].value.length;
                }
                if (!v || m < 0 && v.type !== "comment" && (v.type !== "string" || o.start.column !== v.value.length + d - 1 && v.value.lastIndexOf(s) === v.value.length - 1)) {
                    if (!h.isSaneInsertion(n, r)) return;
                    return {
                        text: s + s,
                        selection: [ 1, 1 ]
                    };
                }
                if (v && v.type === "string") {
                    var y = f.substring(a.column, a.column + 1);
                    if (y == s) return {
                        text: "",
                        selection: [ 1, 1 ]
                    };
                }
            }
        }), this.add("string_dquotes", "deletion", function(e, t, n, r, i) {
            var s = r.doc.getTextRange(i);
            if (!i.isMultiLine() && (s == '"' || s == "'")) {
                c(n);
                var o = r.doc.getLine(i.start.row), u = o.substring(i.start.column + 1, i.start.column + 2);
                if (u == s) return i.end.column++, i;
            }
        });
    };
    h.isSaneInsertion = function(e, t) {
        var n = e.getCursorPosition(), r = new s(t, n.row, n.column);
        if (!this.$matchTokenType(r.getCurrentToken() || "text", u)) {
            var i = new s(t, n.row, n.column + 1);
            if (!this.$matchTokenType(i.getCurrentToken() || "text", u)) return !1;
        }
        return r.stepForward(), r.getCurrentTokenRow() !== n.row || this.$matchTokenType(r.getCurrentToken() || "text", a);
    }, h.$matchTokenType = function(e, t) {
        return t.indexOf(e.type || e) > -1;
    }, h.recordAutoInsert = function(e, t, n) {
        var r = e.getCursorPosition(), i = t.doc.getLine(r.row);
        this.isAutoInsertedClosing(r, i, f.autoInsertedLineEnd[0]) || (f.autoInsertedBrackets = 0), 
        f.autoInsertedRow = r.row, f.autoInsertedLineEnd = n + i.substr(r.column), f.autoInsertedBrackets++;
    }, h.recordMaybeInsert = function(e, t, n) {
        var r = e.getCursorPosition(), i = t.doc.getLine(r.row);
        this.isMaybeInsertedClosing(r, i) || (f.maybeInsertedBrackets = 0), f.maybeInsertedRow = r.row, 
        f.maybeInsertedLineStart = i.substr(0, r.column) + n, f.maybeInsertedLineEnd = i.substr(r.column), 
        f.maybeInsertedBrackets++;
    }, h.isAutoInsertedClosing = function(e, t, n) {
        return f.autoInsertedBrackets > 0 && e.row === f.autoInsertedRow && n === f.autoInsertedLineEnd[0] && t.substr(e.column) === f.autoInsertedLineEnd;
    }, h.isMaybeInsertedClosing = function(e, t) {
        return f.maybeInsertedBrackets > 0 && e.row === f.maybeInsertedRow && t.substr(e.column) === f.maybeInsertedLineEnd && t.substr(0, e.column) == f.maybeInsertedLineStart;
    }, h.popAutoInsertedClosing = function() {
        f.autoInsertedLineEnd = f.autoInsertedLineEnd.substr(1), f.autoInsertedBrackets--;
    }, h.clearMaybeInsertedClosing = function() {
        f && (f.maybeInsertedBrackets = 0, f.maybeInsertedRow = -1);
    }, r.inherits(h, i), t.CstyleBehaviour = h;
}), ace.define("ace/mode/folding/cstyle", [ "require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode" ], function(e, t, n) {
    "use strict";
    var r = e("../../lib/oop"), i = e("../../range").Range, s = e("./fold_mode").FoldMode, o = t.FoldMode = function(e) {
        e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)), 
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)));
    };
    r.inherits(o, s), function() {
        this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/, 
        this.getFoldWidgetRange = function(e, t, n, r) {
            var i = e.getLine(n), s = i.match(this.foldingStartMarker);
            if (s) {
                var o = s.index;
                if (s[1]) return this.openingBracketBlock(e, s[1], n, o);
                var u = e.getCommentFoldRange(n, o + s[0].length, 1);
                return u && !u.isMultiLine() && (r ? u = this.getSectionRange(e, n) : t != "all" && (u = null)), 
                u;
            }
            if (t === "markbegin") return;
            var s = i.match(this.foldingStopMarker);
            if (s) {
                var o = s.index + s[0].length;
                return s[1] ? this.closingBracketBlock(e, s[1], n, o) : e.getCommentFoldRange(n, o, -1);
            }
        }, this.getSectionRange = function(e, t) {
            var n = e.getLine(t), r = n.search(/\S/), s = t, o = n.length;
            t += 1;
            var u = t, a = e.getLength();
            while (++t < a) {
                n = e.getLine(t);
                var f = n.search(/\S/);
                if (f === -1) continue;
                if (r > f) break;
                var l = this.getFoldWidgetRange(e, "all", t);
                if (l) {
                    if (l.start.row <= s) break;
                    if (l.isMultiLine()) t = l.end.row; else if (r == f) break;
                }
                u = t;
            }
            return new i(s, o, u, e.getLine(u).length);
        };
    }.call(o.prototype);
}), ace.define("ace/mode/swift", [ "require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/swift_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle" ], function(e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("./text").Mode, s = e("./swift_highlight_rules").swiftHighlightRules, o = e("./matching_brace_outdent").MatchingBraceOutdent, u = e("../range").Range, a = e("../worker/worker_client").WorkerClient, f = e("./behaviour/cstyle").CstyleBehaviour, l = e("./folding/cstyle").FoldMode, c = function() {
        this.HighlightRules = s, this.$outdent = new o(), this.$behaviour = new f(), this.foldingRules = new l();
    };
    r.inherits(c, i), function() {
        this.lineCommentStart = "//", this.blockComment = {
            start: "/*",
            end: "*/"
        }, this.getNextLineIndent = function(e, t, n) {
            var r = this.$getIndent(t), i = this.getTokenizer().getLineTokens(t, e), s = i.tokens, o = i.state;
            if (s.length && s[s.length - 1].type == "comment") return r;
            if (e == "start" || e == "no_regex") {
                var u = t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);
                u && (r += n);
            } else if (e == "doc-start") {
                if (o == "start" || o == "no_regex") return "";
                var u = t.match(/^\s*(\/?)\*/);
                u && (u[1] && (r += " "), r += "* ");
            }
            return r;
        }, this.checkOutdent = function(e, t, n) {
            return this.$outdent.checkOutdent(t, n);
        }, this.autoOutdent = function(e, t, n) {
            this.$outdent.autoOutdent(t, n);
        }, this.createWorker = function(e) {
            var t = new a([ "ace" ], "ace/mode/swift_worker", "swiftWorker");
            return t.attachToDocument(e.getDocument()), t.on("jslint", function(t) {
                e.setAnnotations(t.data);
            }), t.on("terminate", function() {
                e.clearAnnotations();
            }), t;
        }, this.$id = "ace/mode/swift";
    }.call(c.prototype), t.Mode = c;
});