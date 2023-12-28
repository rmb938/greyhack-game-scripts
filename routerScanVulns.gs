#import ScanVulns from libs/scan_vulns.gs;

metax = include_lib("/lib/metaxploit.so")
if not metax then 
  metax = include_lib(current_path + "/metaxploit.so")
end if

if not metax then 
  exit("Error: Missing metaxploit library")
end if

if params.len != 1 or params[0] == "-h" or params[0] == "--help" then exit("<b>Usage: routerScanVulns [ip address]</b>")

routerIP = params[0]
routerNetSession = metax.net_use(routerIP, 0)
kernel_router = routerNetSession.dump_lib
print("kernel_router.so: "+kernel_router.version)
exploits = ScanVulns(kernel_router)

host_computer = get_shell.host_computer
createResult = host_computer.touch(path, "myFile.txt")

print("Available vulnerabilities:")
for exploit in exploits
  print("====================")
  print(" Name: "+exploit.name)
  print(" Address: "+exploit.address)
  print(" Requirements: ")
  for item in exploit.requirements
    print("   * "+item)
  end for
end for
