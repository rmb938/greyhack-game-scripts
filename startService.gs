if params.len != 1 or params[0] == "-h" or params[0] == "--help" then exit("<b>Usage: startService [library name]</b>")

service = params[0]
serviceLib = include_lib("/lib/"+service+".so")

if not serviceLib then exit("Error: Missing "+service+".so library in the /lib path or the current folder")
output = serviceLib.start_service()
print("Service "+service+" started.")
