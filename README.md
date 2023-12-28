# greyhack-game-scripts
Personal Scripts and Libraries for Grey Hack https://greyhackgame.com/

## `routerScanVulns [ip address]`

Scans a Router for vulnerabilities

### Type: Remote - Internet/Lan

### Example Output:

```
$ scanroutervulns 192.168.1.1
[###################################]==[ 100% ]
Available vulnerabilities:
====================
 Name: sultstorea
 Address: 0x2976A966
 Requirement: Checking existing connection in the local network
====================
 Name: onfig
 Address: 0x2976A966
 Requirement: 
====================
 Name: ationd
 Address: 0x2976A966
 Requirement: 3 computers using this router as gateway
====================
 Name: magecomponentilsu
 Address: 0x2976A966
 Requirement: 
====================
 Name: lush_bits
 Address: 0x13075CB7
 Requirement: 2 computers using this router as gateway
====================
 Name: resultvalu
 Address: 0x13075CB7
 Requirement: 
====================
 Name: send_treeend_bi
 Address: 0x35D0D852
 Requirement: 
====================
 Name: balcontextineset
 Address: 0x35D0D852
 Requirement: Checking existing connection in the local network
```

## `exploitRouterShell [ip address]`

Opens a shell environment on the router

If a vuln is known it will prompt for which one to use. 

If a vuln is not known it will scan for for vulns, 
use the first one found and output data to be added to the script

When vuln is not know script will only try vulns that have no requirements.

### Type: Remote - Internet/Lan

### Example Output:

```
TODO:
```

## `exploitRouterFile [ip address]`

Reads a file or lists out the directory of a LAN computer. If file is binary it will state as such

If a vuln is known it will prompt for which one to use. 

If a vuln is not known it will scan for for vulns, 
use the first one found and output data to be added to the script.

When vuln is not known script will prompt to try vulns that have requirements, 
defaulting to only trying vulns with no requirements.

### Type: Remote - Internet/Lan

### Example Output:

```
TODO:
```

## `exploitSSHShell [ip address]`

Opens a shell environment on the SSH server

If a vuln is known it will prompt for which one to use. 

If a vuln is not known it will scan for for vulns, 
use the first one found and output data to be added to the script

When vuln is not known script will prompt to try vulns that have requirements, 
defaulting to only trying vulns with no requirements.

### Type: Remote - Internet/Lan

### Example Output:

```
TODO:
```

## `exploitSSHFile [ip address]`

Reads a file or lists out the directory of the SSH Server. If file is binary it will state as such

If a vuln is known it will prompt for which one to use. 

If a vuln is not known it will scan for for vulns, 
use the first one found and output data to be added to the script.

When vuln is not known script will prompt to try vulns that have requirements, 
defaulting to only trying vulns with no requirements.

### Type: Remote - Internet/Lan

### Example Output:

```
TODO:
```

## `startService [library name]`

Starts the service managed by the specified library.

Note: Libraries **must** be in `/lib`

### Type: Local

### Example Output:

```
# startService librshell
Service librshell started.
```

## `stopService [library name]`

Stops the service managed by the specified library.

Note: Libraries **must** be in `/lib`

### Type: Local

### Example Output:

```
# stopService librshell
Service librshell stopped.
```
