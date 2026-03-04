from datetime import datetime, timedelta

def main():
    dt = datetime.now().replace(microsecond=0)
    hora = dt.time()
    print(f"Actualmente son las {hora}.")

    descanso = int(input('Dime cuántos minutos quieres calcular: '))
    duracion = timedelta(minutes=descanso)
    print(f"El descanso termina a las {(dt.combine(dt.date(), hora) + duracion).time()}")



if __name__ == "__main__":
    main()