//
//  CalculateView.swift
//  UsbStickApp
//
//  Created by Jan Pink on 24.03.23.
//

import SwiftUI

struct CalculateView: View {
    @State var Name: String = ""
    @State var Size: String = ""
    @State var Speed: String = ""
    @State var Selected: Int = 1
    
    func clearInputs() {
        Name = ""
        Size = ""
        Speed = ""
        Selected = 1
    }

    
    var body: some View {
            VStack {
                VStack {
                    HStack {
                        Text("Input")
                            .font(.largeTitle)
                            .fontWeight(.heavy)
                        Spacer()
                        Button(action: {
                            clearInputs()
                        }) {
                            Image(systemName: "trash.circle.fill") // Replace "Trash" with SF Symbol name
                                .font(.system(size: 35))
                                .foregroundColor(.red)
                        }
                    }
                    
                    InputBox(name: $Name, size: $Size, speed: $Speed, selected: $Selected)
                }
                
                VStack {
                    HStack {
                        Text("Output")
                            .font(.largeTitle)
                            .fontWeight(.heavy)
                        Spacer()
                    }
                    
                    OutputBox(name: $Name, size: $Size, speed: $Speed)
                }
            .padding(.top, 30.0)
            Spacer()
        }
        .padding()
    }
}

struct CalculateView_Previews: PreviewProvider {
    static var previews: some View {
        CalculateView(Name: "", Size: "", Speed: "", Selected: 1)
    }
}
