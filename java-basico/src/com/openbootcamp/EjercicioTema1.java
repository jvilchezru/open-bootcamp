package com.openbootcamp;

public class EjercicioTema1 {

    public static void main(String[] args) {

        /*
            1. Numéricos
         */

        // 1.1. Enteros
        byte num1 = 5;
        short num2 = 20;
        int num3 = 50;
        long num4 = 1000;

        System.out.println("Enteros: " + num1 + ", " + num2 + ", " + num3 + ", " + num4);

        // 1.2. Decimales
        float dec1 = 1.2f;
        double dec2 = 50.4d;

        System.out.println("Decimales: " + dec1 + ", " + dec2);

        /*
            2. Booleanos
         */

        boolean bol1 = false;
        boolean bol2 = true;

        System.out.println("Booleanos: " + bol1 + ", " + bol2);

        /*
            3. Texto
         */

        // 3.1. Cadena de Texto
        String name = "Jesus Vilchez";

        System.out.println("Cadena de texto: " + name);

        // 3.2. Caracter
        char letter = 'a';

        System.out.println("Caracter: " + letter);

    }
}
