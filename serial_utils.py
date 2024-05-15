import serial
import serial.tools.list_ports as list_ports

def find_port(pid: int, vid: int, baud: int) -> serial.Serial | None:
    """ get the port that matches the passed identification values """
    ser = serial.Serial(timeout=0.1)
    ser.baudrate = baud
    ports = list(list_ports.comports())

    print("detected COM ports: ")
    for p in ports:
        print("port: {}".format(p))

        # print port info. if there's an error, just skip it
        try:
            print("pid: " + p.pid + ", vid: " + p.vid)
        except AttributeError:
            print("error reading com attrs, skipping...")
            continue

        if (pid.p == pid) and (p.vid == vid):
            print("device found!")
            ser.port = str(p.device)
            return ser # return matching port

    print("no match found.")
    return None # no value found

