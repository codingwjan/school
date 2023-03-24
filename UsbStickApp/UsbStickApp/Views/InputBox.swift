//
//  InputBox.swift
//  UsbStickApp
//
//  Created by Jan Pink on 24.03.23.
//

import SwiftUI

struct InputBox: View {
    @Binding var name: String
    @Binding var size: String
    @Binding var speed: String
    @Binding var selected: Int
    var body: some View {
        VStack {
            HStack {
                TextField("Enter Name", text: $name)
                    .bold()
            }
            .padding()
            Divider()
            HStack {
                TextField("Enter Size", text: $size)
                    .bold()
                Text("GB")
            }
            .padding()
            Divider()
            HStack {
                TextField("Enter Speed", text: $speed)
                    .bold()
                Text("MB/s")
            }
            .padding()
            Divider()
            HStack {
                Picker(selection: .constant(selected), label: Text("Picker")) {
                    Text("Stick Komplett").tag(1)
                    Text("Stick X GB").tag(2)
                        .bold()
                }
                .padding(.vertical)
                .foregroundColor(.white)
                .padding(/*@START_MENU_TOKEN@*/.leading, 5.0/*@END_MENU_TOKEN@*/)
                Spacer()
            }
        }
        .background(.quaternary)
        .cornerRadius(15)
        }
    }

struct InputBox_Previews: PreviewProvider {
    static var previews: some View {
        let calculateView = CalculateView(Name: "My USB Stick", Size: "1", Speed: "30", Selected: 1)
        return InputBox(name: calculateView.$Name, size: calculateView.$Size, speed: calculateView.$Speed, selected: calculateView.$Selected)
    }
}
