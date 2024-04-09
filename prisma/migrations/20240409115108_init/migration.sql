-- CreateTable
CREATE TABLE "Temperature" (
    "id" SERIAL NOT NULL,
    "room" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Temperature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Humidity" (
    "id" SERIAL NOT NULL,
    "room" INTEGER NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Humidity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Noise" (
    "id" SERIAL NOT NULL,
    "room" INTEGER NOT NULL,
    "noise" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Noise_pkey" PRIMARY KEY ("id")
);
