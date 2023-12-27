#import ScanVulns from libs/scanvulns.gs;

metax = include_lib("/lib/metaxploit.so")
if not metax then exit("Error: Missing metaxploit library")

if params.len != 1 or params[0] == "-h" or params[0] == "--help" then exit(command_info("<b>Usage: scanroutervulns [ip address]</b>"))

routerIP = params[0]
routerNetSession = metax.net_use(routerIP, 0)
ScanVulns(routerNetSession.dump_lib)
