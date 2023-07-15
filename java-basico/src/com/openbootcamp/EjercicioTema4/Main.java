package com.openbootcamp.EjercicioTema4;

public class Main {
    public static void main(String[] args) {
        SmartPhone smartPhone = new SmartPhone("Samsung", "Galaxy A54", 1149, "Android", 7);
        SmartWatch smartWatch = new SmartWatch("Amazfit", "BIP 3", 199, 4, "Bluetooth");

        System.out.println("SmartPhone: " + smartPhone.toString() + "\nSmartWatch: " + smartWatch.toString()) ;
    }
}
