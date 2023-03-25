//
//  OutputBox.swift
//  UsbStickApp
//
//  Created by Jan Pink on 24.03.23.
//

import SwiftUI
    
    
struct OutputBox: View {
    @Binding var name: String
    @Binding var size: String
    @Binding var speed: String
    
    var days: Double = 0.0;
    var hours: Double = 0.0;
    var minutes: Double = 0.0;
    var seconds: Double = 0.0;
    
    init(name: Binding<String>, size: Binding<String>, speed: Binding<String>) {
        self._name = name
        self._size = size
        self._speed = speed
        
        let sizeDouble = Double(size.wrappedValue) ?? 0.0
        let speedDouble = Double(speed.wrappedValue) ?? 0.0
        
        let sizeBytes = sizeDouble * 1000 * 1000 * 1000
        let speedBytesPerSecond = speedDouble * 1000 * 1000
        
        seconds = sizeBytes / speedBytesPerSecond
        minutes = seconds / 60
        hours = minutes / 60
        days = hours / 24
        
        seconds = (seconds * 100).rounded() / 100
        minutes = (minutes * 100).rounded() / 100
        hours = (hours * 100).rounded() / 100
        days = (days * 100).rounded() / 100
        
        if seconds.isNaN || seconds.isInfinite || seconds == 0 {
            seconds = 0.0
        }
        if minutes.isNaN || minutes.isInfinite || minutes == 0 {
            minutes = 0.0
        }
        if hours.isNaN || hours.isInfinite || hours == 0 {
            hours = 0.0
        }
        if days.isNaN || days.isInfinite || days == 0 {
            days = 0.0
        }
    }
    
    
    var body: some View {
        VStack {
            if (name == "" && hours < 1 && minutes < 1 && seconds < 1) {
                Text("Please enter some values")
                    .bold()
                    .padding()
            } else {
                if name != "" {
                    HStack {
                        Text(name)
                            .bold()
                        Spacer()
                    }
                    .padding()
                }
                if days >= 1 {
                    Divider()
                    HStack {
                        Text("Days: " + String(days))
                            .bold()
                        Spacer()
                    }
                    .padding()
                    
                }
                if hours >= 1 {
                    Divider()
                    HStack {
                        Text("Hours: " + String(hours))
                            .bold()
                        Spacer()
                    }
                    .padding()
                    
                }
                if minutes >= 1 {
                    Divider()
                    HStack {
                        Text("Minutes: " + String(minutes))
                            .bold()
                        Spacer()
                    }
                    .padding()
                    
                }
                if seconds >= 1 {
                    Divider()
                    HStack {
                        Text("Seconds: " + String(seconds))
                            .bold()
                        Spacer()
                    }
                    .padding()
                    Divider()
                }
            }
        }
            .background(.quaternary)
                    .cornerRadius(15)
        }
    
    
    
    
    struct OutputBox_Previews: PreviewProvider {
        static var previews: some View {
            let calculateView = CalculateView(Name: "", Size: "1000", Speed: "30", Selected: 1)
            return OutputBox(name: calculateView.$Name, size: calculateView.$Size, speed: calculateView.$Speed)
        }
    }
}
