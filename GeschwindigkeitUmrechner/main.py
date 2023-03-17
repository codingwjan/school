sourceSize = input("Please enter how large the USB is in GB: ")
sourceSize = int(sourceSize)
sourceSpeed = input("Please enter the speed of the USB in MB/s: ")
sourceSpeed = int(sourceSpeed)

#calculate the time it takes to copy the files
time = (sourceSize * 1000) / sourceSpeed
time = round(time, 2)

#if time is less than 60 seconds, print seconds
if time > 60:
    time = time / 60
    time = round(time, 2)
    print("It will take " + str(time) + " minutes to copy the files")
else:
    print("It will take " + str(time) + " seconds to copy the files")