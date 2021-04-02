rh._.exports({"0":["Customer data transfer"],"1":["\n  ","\n  ","Using Porter functionality, you can transfer some of your existing customers to the target system and immediately run services there with minimum reconfiguration efforts.","\n  ","\n  ","Porter is a script with which you export a customer’s service and billing configurations and all of the dependent entities (accounts, products, service features, xDRs, invoices, etc.) from a previous “source” system and import them into the target.","\n  ","NOTE",": You must have the Root access level to perform the data transfer.","\n  ","As a result, the following data is transferred:","\n  ","\n    ","\n      ","\n        ","\n          ","\n            ","Entity","\n          ","\n          ","\n            ","Transferred Data","\n          ","\n        ","\n        ","\n          ","\n            ","Customer","\n          ","\n          ","\n            ","Customers’ configuration:","\n            ","\n              ","\n                ","Customers and their accounts.","\n              ","\n              ","\n                ","Customer and account service features.","\n              ","\n              ","\n                ","xDRs.","\n              ","\n              ","\n                ","Invoices.","\n              ","\n              ","\n                ","Payment methods.","\n              ","\n              ","\n                ","Customer sites.","\n              ","\n              ","\n                ","IP Centrex elements – extensions, huntgroups and call queues.","\n              ","\n              ","\n                ","Customer credit limit and payment history.","\n              ","\n              ","\n                ","CPE and SIM inventory records.","\n              ","\n            ","\n            ","Generic configuration:","\n            ","\n              ","\n                ","Custom access levels.","\n              ","\n              ","\n                ","Customer classes.","\n              ","\n              ","\n                ","Customer products and product groups.","\n              ","\n              ","\n                ","Customer tariffs and rates.","\n              ","\n              ","\n                ","Spending plans.","\n              ","\n              ","\n                ","Subscriptions.","\n              ","\n              ","\n                ","Volume discount plans and counters.","\n              ","\n              ","\n                ","Dialing rules.","\n              ","\n              ","\n                ","Fraud traffic profiles.","\n              ","\n              ","\n                ","Custom reports","\n              ","\n              ","\n                ","Call records.","\n              ","\n            ","\n          ","\n        ","\n        ","\n          ","\n            ","Vendor","\n          ","\n          ","\n            ","\n              ","\n                ","Vendors and connections.","\n              ","\n              ","\n                ","Vendor DID batches.","\n              ","\n              ","\n                ","Vendor tariffs and rates.","\n              ","\n              ","\n                ","Vendor xDRs","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n  ","\n  ","By default, customer xDRs that pertain to the current billing period are transferred. However, you can reconfigure Porter to transfer all of a customer’s xDRs, if necessary.","\n  ","\n    ","\n      ","\n        ","\n        ","\n          ","TIP",": To enable customers to use the services in the target system sooner, you can perform two-phase data transfer: first transfer customers without their xDRs. Then, transfer these  customers’ xDRs with the second run of Porter.","\n        ","\n      ","\n    ","\n  ","\n  ","Reseller ","data is similarly transferred: the reseller configuration and that of their customers and subresellers is transferred.","\n  ","To preserve bilateral traffic exchange for ","vendors",", pre-configure them as customers on the target system.","\n  ","For the administrator’s convenience, the following ","general ","configuration ","data can be separately transferred (either assigned or not to a customer or an account):","\n  ","\n    ","\n      ","Products;","\n    ","\n    ","\n      ","Subscriptions;","\n    ","\n    ","\n      ","Volume discount plans;","\n    ","\n    ","\n      ","Tariffs and rates;","\n    ","\n    ","\n      ","Customer classes;","\n    ","\n    ","\n      ","DID pricing batches and DID groups;","\n    ","\n    ","\n      ","Custom field names;","\n    ","\n    ","\n      ","Destinations;","\n    ","\n    ","\n      ","Destination groups and destination group sets;","\n    ","\n    ","\n      ","Nodes.","\n    ","\n  ","\n  ","NOTE",": Customer .csv files with xDRs and voicemail messages as well as .csv files with custom report results are not transferred by Porter.","\n  ","Porter operates in interactive mode. This means that if during a data transfer some entity appears to already exist in the production system (e.g. you transferred the product earlier), you may choose to use this entity or create a new one.","\n  ","When transferred, a customer and their accounts acquire the "," ","Exported ","status in the source system. This means\n    that customer service provisioning and billing is stopped. As soon as the administrator imports the customer, it resumes in the target system.","\n  ","To reduce this downtime, during which a customer is “in-between” systems and cannot use the services, Porter creates a lineup of entities to transfer and processes them one by one. In other words, it exports customer A’s data from the source system\n    and immediately imports it to the target. Then it repeats that same procedure to transfer customer B, etc.","\n  ","NOTE",": If customer accounts were registered on the PortaSIP® server during the data transfer, they are displayed as registered until the time of their registration expires.","\n  ","For the data transfer to take place, the following entities must be pre-configured in the target system:","\n  ","\n    ","\n      ","A PortaBilling® root user;","\n    ","\n    ","\n      ","Users for your staff members;","\n    ","\n    ","\n      ","Currencies;","\n    ","\n    ","\n      ","Payment systems;","\n    ","\n    ","\n      ","Templates (invoice, tariff upload/download);","\n    ","\n    ","\n      ","Taxation methods;","\n    ","\n    ","\n      ","Off-peak periods.","\n    ","\n  ","\n  ","These functionalities must also be pre-configured in the target system if a customer or an account uses them:","\n  ","\n    ","\n      ","Routing plans.","\n    ","\n    ","\n      ","Routing categories.","\n    ","\n    ","\n      ","Routing criteria.","\n    ","\n    ","\n      ","Service policies.","\n    ","\n    ","\n      ","Internet access policies.","\n    ","\n    ","\n      ","Geo-risk profiles.","\n    ","\n    ","\n      ","CPE profiles.","\n    ","\n    ","\n      ","Fraud traffic profiles.","\n    ","\n    ","\n      ","Voice applications.","\n    ","\n  ","\n  ","Any custom configuration that is defined in the source system (e.g. custom notification templates) must be pre-configured in the target system as well.","\n  ","\n  ","Dual Version PortaSwitch® provides a mechanism for automatic synchronization of call records between source and target systems. As a result, you can access and download the call records in the Dual Version PortaSwitch® system regardless of the system\n    (source or target) on which they were initially created.","\n  ","Dual Version PortaSwitch® maintains the service integrity for your customers through constant synchronization of their call records with the help of a script that runs on the target system on set intervals of time.","\n  ","When a new call record appears in the source system, the file is synchronized with the target system with the help of the script, even if the corresponding customer wasn’t migrated to the target system yet. When the customer finally fully migrates to\n    the target system, all call records will already be present there.","\n  ","\n  ","Porter can migrate several customers in parallel, which allows you to increase data migration performance.","\n  ","To enable parallel processing for Porter, the number of threads for data migration must be defined in the Porter configuration. This maximum thread number depends on the server’s processing capacity and the load caused by other operations running on\n    that same server. Contact PortaOne Support to evaluate the number of threads available for Porter in your installation.","\n  ","\n  ","Customers may face issues with the target system after the transfer. If these issues should require deep investigation, an administrator can restore the customer on the source system.","\n  ","To do this, the administrator runs the Retrop tool on the target system where the script performs a reverse transfer of customer xDRs as follows:","\n  ","\n    ","\n      ","first it analyzes the customer xDRs on both systems to find which ones of them can be returned (i.e. for services and entities that exist in both systems),","\n    ","\n    ","\n      ","it marks the customer record as Exported in the target system,","\n    ","\n    ","\n      ","then it imports the xDRs to the source system, and finally,","\n    ","\n    ","\n      ","it lifts the Exported status from the customer record in the source system,","\n    ","\n    ","\n      ","adjusts the customer’s balance so that it corresponds to the customer’s balance on the target system. If the customer has debit accounts their balance is also adjusted.","\n    ","\n  ","\n  ","If the customer has used the services on the target system and therefore has new xDRs, Retrop generates the report for the administrator. The administrator then uses that to adjust the customer balance manually.","\n  ","Note that a reverse transfer of customer xDRs must be treated as an emergency measure due to the following limitations:","\n  ","\n    ","\n      ","The xDRs must be returned before the customer’s billing period closes to avoid double charging, taxing and invoicing.","\n    ","\n    ","\n      ","When restoring the customer record on the source system, the service configuration will be rolled back. This means that any configuration changes done on the target system (e.g. new service enabled) will be lost.","\n    ","\n    ","\n      ","If the administrator has terminated the customer in the source system, the Retrop tool will not be able to perform a reverse xDR transfer.","\n    ","\n    ","\n      ","If the administrator terminates a customer’s account in the target system but the account still exists in the source one, the account will remain active after the Retrop tool performs a reverse xDR transfer and lifts the Exported status from the\n        customer in the source system.","\n    ","\n  ","\n  ","\n  ","If you migrated some customers to the target system for testing purposes and later wish to return them to the source system, you need to remove the exported customer data.","\n  ","To do this, use the Cleaner tool. Cleaner is a script that collects customer data and all its dependent entities and then deletes their records from the database. You can run Cleaner from either system in Dual Version PortaSwitch®, however, you must\n    define beforehand where the data is to be removed from.","\n  ","Thus, with Cleaner you can remove the following entities:","\n  ","\n    ","\n      ","Customers,","\n    ","\n    ","\n      ","Distributors,","\n    ","\n    ","\n      ","Products,","\n    ","\n    ","\n      ","Resellers,","\n    ","\n    ","\n      ","Tariffs,","\n    ","\n    ","\n      ","Vendors,","\n    ","\n    ","\n      ","Access levels,","\n    ","\n    ","\n      ","DID numbers,","\n    ","\n    ","\n      ","SIM cards, and","\n    ","\n    ","\n      ","CPE.","\n    ","\n  ","\n  ","Similar to Porter, Cleaner allows you to delete entities one by one or several at a time. This ability to delete unnecessary data facilitates troubleshooting and optimizes the overall management of Dual Version PortaSwitch®.","\n  ","Cleaner is designed to remove only data that has been transferred. Therefore, do not use it for simple system cleaning.","\n\n"],"3":["Customer data transfer"],"4":["Reverse transfer of customer xDRs","Cleanup of exported customer data"],"6":["Call records synchronization","Parallel processing mode"],"id":"23"})