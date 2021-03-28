rh._.exports({"0":["Number porting requests processing"],"1":["\n  ","\n    ","\n    ","Number porting is widely used within the wireless communications market as it allows users to keep their numbers when switching service providers.","\n    ","In Dual Version PortaSwitch®, number porting requests are distributed based on the current location of the customer record. Thus, all incoming requests from Neustar arrive to WebDispatcher, which passes them either to the target system or the source\n      one. This ensures uninterrupted service provisioning and facilitates smooth customer migration.","\n    ","Let’s consider how request distribution works for port-in and port-out requests.","\n    ","\n    ","Port-out requests are created automatically, without an administrator’s involvement. So when a user wishes to port their number from PortaBilling® to another provider, WebDispatcher receives the port-out request from Neustar. WebDispatcher finds which\n      system the customer’s account record belongs to. If the customer has been moved to the target system, it passes the number porting request there. The target system terminates the customer’s account record and updates Neustar about its number availability.\n      Neustar confirms the request completion to WebDispatcher, which passes it to the target system.","\n    ","If the customer’s account is within the source system, the whole porting out procedure runs from there.","\n    ","\n    ","When porting in a user’s number, the administrator defines the system where this number will be provisioned. Then the respective system interacts with Neustar to complete the request.","\n    ","Consider the following example:"," John Doe, a former customer of EasyCall Ltd., signs up for HappyTraffic services and wants to keep his number 18185557852. The administrator creates the account 120522254200 for John in the target system and initiates\n      a port-in request to Neustar in the target system’s PortaBilling®. After Neustar confirms the request, 120522254200 is replaced with 18185557852 and John starts using the services of HappyTraffic.","\n    ","The distribution of number porting requests across systems within Dual Version PortaSwitch® facilitates gradual customer migration and ensures the uninterrupted operation of number porting functionality for users, regardless of their location.","\n  ","\n\n"],"2":["Number porting requests processing"],"3":["Port-out requests","Port-in requests"],"id":"27"})