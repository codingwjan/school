def conversion(sourceSize, sourceSpeed):

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


def main():
    sourceSize = input("Please enter how large the USB is in GB: ")
    sourceSpeed = input("Please enter the speed of the USB in MB/s: ")
    sourceSpeed = int(sourceSpeed)
    sourceSize = int(sourceSize)

    conversion(sourceSize, sourceSpeed)


if __name__ == "__main__":
    main()