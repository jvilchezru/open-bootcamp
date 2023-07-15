package com.openbootcamp.EjercicioTema4;

public class SmartPhone extends SmartDevice{
    String sistema;
    double pantalla;

    public SmartPhone() {
    }

    public SmartPhone(String marca, String modelo, double precio, String sistema, double pantalla) {
        super(marca, modelo, precio);
        this.sistema = sistema;
        this.pantalla = pantalla;
    }

    @Override
    public String toString() {
        return super.toString() +
                ", sistema = " + sistema +
                ", pantalla = " + pantalla;
    }
}
