"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiValidatorParams = exports.joiValidatorBody = void 0;
const tryCatchErr_1 = __importDefault(require("./tryCatchErr"));
function joiValidatorBody(schema) {
    return (0, tryCatchErr_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
        yield schema.validateAsync(req.body, { abortEarly: false });
        next();
    }));
}
exports.joiValidatorBody = joiValidatorBody;
function joiValidatorParams(schema) {
    return (0, tryCatchErr_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
        yield schema.validateAsync(req.params, { abortEarly: false });
        next();
    }));
}
exports.joiValidatorParams = joiValidatorParams;
