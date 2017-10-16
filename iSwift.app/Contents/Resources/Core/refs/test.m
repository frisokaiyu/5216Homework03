// This is a Comment

/* 
    another Comments 
    without ever working
    this is it
*/

@interface aClass : NSObject

@end

@implementation aClass

- (void)main {
    for (int a=0; i<10; i++) {
    }
    
    @try {
    }
    @catch (NSException* e)
    {
        NSMutableArray* strArray = [@[@"1",@"2",@"3"] mutableCopy];
        for (NSString* s in strArray)
        {
            NSLog(@"String: %@",s);
        }
    }
    @finally {
        
    }
}

- (void)another:(NSString*)one doing:(int)something {
}

@end

// Comment

@implementation bClass // Comment

@end