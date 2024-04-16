-- CreateTable
CREATE TABLE "flame" (
    "id" SERIAL NOT NULL,
    "safe" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flame_pkey" PRIMARY KEY ("id")
);
