package com.openbootcamp;

import java.util.Scanner;

public class EjercicioTema2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double price, priceIVA;

        System.out.print("> Ingrese un precio: ");
        price = in.nextDouble();


        priceIVA = addIVA(price);

        System.out.println("\nEl precio con IVA incluido es " + priceIVA);
    }

    static double addIVA(double price) {
        //  IVA = 18%
        return price * 1.18;
    }
}
