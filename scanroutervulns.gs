import_code("libs/scanvulns.gs")

if params.len != 1 or params[0] == "-h" or params[0] == "--help" then exit(command_info("<b>Usage: scanroutervulns [ip address]</b>"))

routerIP = params[0]
routerNetSession = metax.net_use(routerIP, 0)
scanvulns(routerNetSession.dump_lib)
