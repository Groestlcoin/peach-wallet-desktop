const { Stream } = require("../model/Stream");
const { StreamPart } = require("../model/StreamPart");

module.exports = {
    target: Stream,
    columns: {
        id: {
            primary: true,
            type: "varchar",
            generated: false,
        },
        name: {
            type: "varchar",
        },
        totalParts: {
            type: "integer",
        },
        partsPaid: {
            type: "integer",
        },
        price: {
            type: "integer",
        },
        memo: {
            type: "varchar",
        },
        lightningID: {
            type: "varchar",
        },
        date: {
            type: "integer",
        },
        lastPayment: {
            type: "integer",
        },
        status: {
            type: "varchar",
            default: "active",
        },
        delay: {
            type: "integer",
        },
        currency: {
            type: "varchar",
        },
    },
    relations: {
        parts: {
            target: () => StreamPart,
            type: "one-to-many",
            inverseSide: "stream",
            JoinColumn: true,
        },
    },
};
