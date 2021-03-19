rh._.exports({"0":["Per-configuration licensing: flexibility and control"],"1":["\n  ","\n    ","\n    ","The license provides you with great flexibility when deploying the PortaSwitch® installation on servers. It doesn’t constrain your business parameters (e.g. the number of concurrent calls, ports, minutes or end users) and it defines the type of PortaSwitch®\n      installation you have. The license is applied per PortaSwitch® installation (site) and is defined by the following parameters:","\n    ","\n      ","\n        ","The ","maximum"," number of ","servers ","(where you add ","any ","PortaSwitch® applications) in your installation;","\n      ","\n      ","\n        ","The ","maximum"," number of specific ","application servers ","in your installation. In particular:","\n        ","\n          ","\n            ","The ","maximum ","number of servers where you can deploy a billing engine (RADIUS / Diameter).","\n          ","\n          ","\n            ","The ","maximum ","number of servers where you can deploy PortaSIP® (PortaSIP® dispatching node or PortaSIP® processing node).","\n          ","\n          ","\n            ","For those products that have a bundled license for Oracle software – the ","maximum ","number of servers where you can deploy Oracle database cluster software may ","not ","exceed the number of billing engine servers (e.g. if your license\n              includes five billing engine servers, then you can deploy a ","maximum ","of five servers with Oracle database cluster software).","\n          ","\n        ","\n      ","\n    ","\n    ","Consider the following example:","\n    ","A standard PortaSwitch® Clustered installation license covers nine servers. Among them, two servers run the billing engine cluster, two servers run the web cluster and three servers run the PortaSIP® cluster.","\n    ","An ITSP decides to deploy PortaSwitch® Clustered on only eight of their servers:","\n    ","\n      ","\n        ","\n          ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","№","\n            ","\n            ","\n              ","Server name","\n            ","\n            ","\n              ","Running PortaSwitch® applications","\n            ","\n          ","\n          ","\n            ","\n              ","1","\n            ","\n            ","\n              ","Alpha","\n            ","\n            ","\n              ","\n                ","Billing engine","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","2","\n            ","\n            ","\n              ","Beta","\n            ","\n            ","\n              ","\n                ","Billing engine","\n                ","Master DB","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","3","\n            ","\n            ","\n              ","Gamma","\n            ","\n            ","\n              ","\n                ","Web server","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","4","\n            ","\n            ","\n              ","Epsilon","\n            ","\n            ","\n              ","\n                ","Web server","\n                ","Replica DB","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","5","\n            ","\n            ","\n              ","Zita","\n            ","\n            ","\n              ","\n                ","PortaSIP® dispatching node","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","6","\n            ","\n            ","\n              ","Iota","\n            ","\n            ","\n              ","\n                ","PortaSIP® dispatching node","\n                ","PortaSIP® processing node","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","7","\n            ","\n            ","\n              ","Sigma","\n            ","\n            ","\n              ","\n                ","PortaSIP® processing node","\n              ","\n            ","\n          ","\n          ","\n            ","\n              ","8","\n            ","\n            ","\n              ","Omega","\n            ","\n            ","\n              ","\n                ","Configuration server","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","This configuration will work just perfectly; furthermore, it is possible to easily add one more server and configure additional PortaSIP® processing node instances there for enhanced productivity.","\n    ","As you see, you can combine different PortaSwitch® applications (e.g. web server and PortaSIP® server instances) on a single server and easily add application instances to your servers to scale up your capacity and match your unique business requirements.","\n    ","An exception is the Configuration server instance, which, due to its specific purpose, is only compatible with the Log server instance.","\n    ","At the same time, the total number of servers in your installation and number of application servers with the billing engine and PortaSIP® instances must not exceed the parameters defined by your license.","\n    ","\n    ","A license verification method is based on centrally distributed ","license files"," and provides the user with a flexible and convenient service management system. As PortaSwitch® applications (e.g. PortaBilling® OCS or PortaSIP®) are not\n      bound to a specific physical server, you can change the system configuration and launch applications on new servers without any need for your physical presence in the facility where your servers are located.","\n    ","PortaSwitch® applications can be moved between servers with ease – you can turn a server that used to be a web server into a PortaSIP® or add any other applications with just a few mouse clicks on the web interface of the Configuration server.","\n    ","The time required to deploy new applications after the license has been purchased is minimum. For example, if a rapid increase in traffic is anticipated this coming weekend, you can contact the PortaOne sales team and once your purchase has been finalized\n      and the license information has been updated in our CRM, you can immediately add extra PortaSIP® instances to your system in just a few minutes.","\n    ","A hardware failure no longer causes a lengthy service outage. If, for example, the OCS server you were running goes down because of a hardware failure – you can promptly move the service to a different host. This eliminates several hours of potential\n      downtime, since there is no need for someone to travel to the collocation facility where the servers are installed. While the OCS service is running on a different server, you have plenty of time to fix (or even replace) the defective one. By the\n      same token, you can add new physical servers or perform maintenance on existing ones without interrupting the flow of your business, by reassigning the applications to other servers.","\n    ","\n    ","It is a protected .xml file that contains the following information:","\n    ","\n      ","\n        ","Component instances (e.g. PortaSIP®, billing engine, DB, web, RT, etc.).","\n      ","\n      ","\n        ","Instance options (e.g. cluster, SMP etc.).","\n      ","\n      ","\n        ","Information about IPs.","\n      ","\n      ","\n        ","Expiration date.","\n      ","\n      ","\n        ","Information about the owner.","\n      ","\n      ","\n        ","Encryption seed and signature.","\n      ","\n    ","\n    ","In general, it is similar to an email signed with a PGP and looks like this:","\n    ","\n    ","\n    ","You can make changes to your “live” system at any time (e.g. add a new PortaBilling® OCS instance or move it to a different physical server) using the Configuration server web interface (see Section 2 of the ","PortaSwitch® Configuration Server Web Reference Guide",").\n      When you apply the change, the Configuration server will retrieve the ","license file"," from a centralized PortaOne Licensing Server and check whether all of the new configuration items (e.g. total number of OCS servers in the cluster)\n      are in line with the license terms. If the configuration corresponds to your license, it will be applied; otherwise you will be prompted to change the configuration so that it meets license restrictions.","\n    "," ","\n    ","\n    "," ","\n    ","A local copy of the license file is stored on the Configuration server and then distributed to the remaining servers. Each individual application uses it to verify that this service can run as a part of this installation – a valid license file is\n      necessary for any application to operate. The local copy of the license file is updated every night to prevent it from expiration.","\n    ","NOTE",": For your installation to work properly, PortaOne Licensing Servers (license1.portaone.com, license2.portaone.com) should be accessible from all your hosts.","\n    ","When none of the licensing servers are accessible, the monitoring system shows a corresponding warning message. To make sure your business is not affected by a problem with Internet connectivity, preventing your servers from contacting PortaOne Licensing\n      Servers, the license file will be valid for a week after download. That is, even in the unlikely event that for several consecutive days your server does not have connectivity to the Internet and cannot access any of the licensing servers, your\n      services will continue running for up to seven days, which is quite enough time to restore access.","\n  ","\n\n"],"2":["Per-configuration licensing: flexibility and control"],"3":["What's in it for me?","What is a License file?","How does it work?"],"id":"8"})