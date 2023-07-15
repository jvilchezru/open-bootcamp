package com.openbootcamp.EjercicioTema4;

public abstract class SmartDevice {
    String marca;
    String modelo;
    double precio;

    public SmartDevice() {
    }

    public SmartDevice(String marca, String modelo, double precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    @Override
    public String toString() {
        return "marca = " + marca +
                ", modelo = " + modelo +
                ", precio = " + precio;
    }
}
