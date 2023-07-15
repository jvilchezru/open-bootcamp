package com.openbootcamp.EjercicioTema4;

public class SmartWatch extends SmartDevice{
    int ram;
    String conectividad;

    public SmartWatch() {
    }

    public SmartWatch(String marca, String modelo, double precio, int ram, String conectividad) {
        super(marca, modelo, precio);
        this.ram = ram;
        this.conectividad = conectividad;
    }

    @Override
    public String toString() {
        return super.toString() +
                ", ram = " + ram +
                ", conectividad = " + conectividad;
    }
}
