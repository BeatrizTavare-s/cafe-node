"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cafeController = void 0;
var CafeController = /** @class */ (function () {
    function CafeController() {
    }
    CafeController.prototype.get = function (req, res) {
        return res.json({
            response: 'Rota GET cafe'
        });
    };
    return CafeController;
}());
exports.cafeController = new CafeController();
// exports.get = (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).send('Rota GET');
// };
