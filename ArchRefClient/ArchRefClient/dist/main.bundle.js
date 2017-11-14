webpackJsonp([0,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_expectedproperty__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpectedPropertyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - ExpectedPropertyService  - Implements the calls to the rest interface of the application server and
 *                                       handle the request construction and response extraction for ExpectedProperty data
 *
 *********************************************************************************************************************************************************************************************************/
var ExpectedPropertyService = ExpectedPropertyService_1 = (function () {
    function ExpectedPropertyService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.expectedPropertyUrl = '/api/expectedproperties';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getExpectedProperties - Send GET all ExpectedProperties REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.getExpectedProperties = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ExpectedProperty] Send GET ExpectedProperties Request', ExpectedPropertyService_1.name);
        return this.http.get(this.expectedPropertyUrl).map(this.extractExpectedProperties).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getExpectedProperty - Send GET ExpectedProperty REQUEST
     *
     * @param - id: number - ID of the ExpectedProperty which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.getExpectedProperty = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ExpectedProperty] Send GET ExpectedProperty Request with ID:' + id, ExpectedPropertyService_1.name);
        return this.http.get(this.expectedPropertyUrl + '/' + id).map(this.extractExpectedProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createExpectedProperty - Send POST ExpectedProperty REQUEST
     *
     * @param - expectedProperty: ExpectedProperty - ExpectedProperty which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.createExpectedProperty = function (expectedProperty) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ExpectedProperty] Send POST ExpectedProperty Request', ExpectedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - ExpectedProperty]' + JSON.stringify(expectedProperty), ExpectedPropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.expectedPropertyUrl, expectedProperty, options).map(this.extractExpectedProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateExpectedProperty - Send PUT ExpectedProperty REQUEST
     *
     * @param - expectedProperty: ExpectedProperty - ExpectedProperty which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.updateExpectedProperty = function (expectedProperty) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ExpectedProperty] Send PUT Request ExpectedProperty', ExpectedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - ExpectedProperty] ' + JSON.stringify(expectedProperty), ExpectedPropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.expectedPropertyUrl + '/' + expectedProperty.id, expectedProperty, options).map(this.extractExpectedProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteExpectedProperty - Send DELETE ExpectedProperty REQUEST
     *
     * @param - id: number - ID of the ExpectedProperty which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.deleteExpectedProperty = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ExpectedProperty] Send DELETE ExpectedProperty Request with ID: ' + id, ExpectedPropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.expectedPropertyUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractExpectedPropertyDataList - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.extractExpectedProperties = function (res) {
        var body = res.json();
        var expectedPropertyList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - ExpectedProperty]: Extract Data of Response Body', ExpectedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - ExpectedProperty]: ' + JSON.stringify(body), ExpectedPropertyService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var expectedProperty = body_1[_i];
            var tempExpectedProperty = new __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_expectedproperty__["a" /* ExpectedProperty */](expectedProperty.name, expectedProperty.value);
            tempExpectedProperty = expectedProperty;
            expectedPropertyList.push(tempExpectedProperty);
        }
        return expectedPropertyList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractExpectedPropertyData - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.extractExpectedProperty = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - ExpectedProperty]: Extract Data of Response Body', ExpectedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - ExpectedProperty]: ' + JSON.stringify(body), ExpectedPropertyService_1.name);
        var expectedProperty = new __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_expectedproperty__["a" /* ExpectedProperty */](body.name, body.value);
        expectedProperty = body;
        return expectedProperty || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return ExpectedPropertyService;
}());
ExpectedPropertyService = ExpectedPropertyService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ExpectedPropertyService);

var ExpectedPropertyService_1, _a;
//# sourceMappingURL=expectedproperty.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_providedproperty__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidedPropertyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service ProvidedPropertyService - Implements the calls to the rest interface of the application server and
 *                                    handle the request construction and response extraction for ProvidedProperty data
 *
 *********************************************************************************************************************************************************************************************************/
var ProvidedPropertyService = ProvidedPropertyService_1 = (function () {
    function ProvidedPropertyService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.providedPropertyUrl = '/api/providedproperties';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getProvidedProperties - Send GET all ProvidedProperties REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.getProvidedProperties = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ProvidedProperty] Send GET ProvidedProperties Request', ProvidedPropertyService_1.name);
        return this.http.get(this.providedPropertyUrl).map(this.extractProvidedProperties).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getProvidedProperty - Send GET ProvidedProperty REQUEST
     *
     * @param - id: number - ID of the ProvidedProperty which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.getProvidedProperty = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ProvidedProperty] Send GET ProvidedProperty Request with ID:' + id, ProvidedPropertyService_1.name);
        return this.http.get(this.providedPropertyUrl + '/' + id).map(this.extractProvidedProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createProvidedProperty - Send POST ProvidedProperty REQUEST
     *
     * @param - providedProperty: ProvidedProperty - ProvidedProperty which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.createProvidedProperty = function (providedProperty) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ProvidedProperty] Send POST ProvidedProperty Request', ProvidedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - ProvidedProperty]' + JSON.stringify(providedProperty), ProvidedPropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.providedPropertyUrl, providedProperty, options).map(this.extractProvidedProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateProvidedProperty - Send PUT ProvidedProperty REQUEST
     *
     * @param - providedProperty: ProvidedProperty - ProvidedProperty which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.updateProvidedProperty = function (providedProperty) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ProvidedProperty] Send PUT Request ProvidedProperty', ProvidedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - ProvidedProperty] ' + JSON.stringify(providedProperty), ProvidedPropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.providedPropertyUrl + '/' + providedProperty.id, providedProperty, options).map(this.extractProvidedProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteProvidedProperty - Send DELETE ProvidedProperty REQUEST
     *
     * @param - id: number - ID of the ProvidedProperty which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.deleteProvidedProperty = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - ProvidedProperty] Send DELETE ProvidedProperty Request with ID: ' + id, ProvidedPropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.providedPropertyUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractProvidedProperties -  Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.extractProvidedProperties = function (res) {
        var body = res.json();
        var propertyList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - ProvidedProperty]: Extract Data of Response Body', ProvidedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - ProvidedProperty]: ' + JSON.stringify(body), ProvidedPropertyService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var providedProperty = body_1[_i];
            var tempProvidedProperty = new __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_providedproperty__["a" /* ProvidedProperty */](providedProperty.name, providedProperty.value);
            tempProvidedProperty = providedProperty;
            propertyList.push(tempProvidedProperty);
        }
        return propertyList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractProvidedProperty - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.extractProvidedProperty = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - ProvidedProperty]: Extract Data of Response Body', ProvidedPropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - PROPERTY]: ' + JSON.stringify(body), ProvidedPropertyService_1.name);
        var providedProperty = new __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_providedproperty__["a" /* ProvidedProperty */](body.name, body.value);
        providedProperty = body;
        return providedProperty || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return ProvidedPropertyService;
}());
ProvidedPropertyService = ProvidedPropertyService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ProvidedPropertyService);

var ProvidedPropertyService_1, _a;
//# sourceMappingURL=providedpropertyservice.service.js.map

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(459);


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Level; });

/*******************************************************************************************************************************************************************************************************
 *
 * @class - Level - Level for the Level Graph Model for display the levels in the LevelGraphModellerComponent
 *
 * @field - id: number - ID of the level
 * @field - depth: number - Depth of the level in the LevelGraph
 * @field - visible: boolean - Indicates if a level should be displayed or not in the LevelGraphModellerComponent
 * @field - y: number - Y-Position of the level layer in the LevelGraphModellerComponent
 * @field - height: number - Height of the level layer in the LevelGraphModellerComponent
 * @field - levelGraph: LevelGraph height: number - Corresponding LevelGraph for the Level
 * @field - levelGraphId: number - ID of the corresponding LevelGraph
 *
 * //hint: You may decide to decouple level data from data which is only be used for display reasons in the LevelGraphModellerComponent
 * //hint: You may decide to add list for the nodes and relations which are in a level for faster access
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var Level = (function () {
    function Level(depth, y, levelGraphId) {
        this.depth = depth;
        this.y = y;
        this.height = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* Constants */].LEVELHEIGHT;
        this.visible = true;
        this.levelGraphId = levelGraphId;
    }
    return Level;
}());

//# sourceMappingURL=level.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Property; });
/*******************************************************************************************************************************************************************************************************
 *
 * @class - Property - Properties are name value pairs
 *
 * @field - id: number - Id of the Property
 * @field - name: string - Name of the Property
 * @field - value: string - Value of the Property
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var Property = (function () {
    function Property(name, value) {
        this.id = null;
        this.name = 'Unnamed';
        this.value = 'Undefined';
        this.name = name;
        this.value = value;
    }
    return Property;
}());

//# sourceMappingURL=property.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - LevelGraphRelationService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for LevelGraphRelations
 *
 *********************************************************************************************************************************************************************************************************/
var LevelGraphRelationService = LevelGraphRelationService_1 = (function () {
    function LevelGraphRelationService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.levelGraphRelationUrl = '/api/levelgraphrelations';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getLevelGraphRelations - Send GET all Level Graph Relations REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.getLevelGraphRelations = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHRELATION]: Send GET Level Graph Relation Request', LevelGraphRelationService_1.name);
        return this.http.get(this.levelGraphRelationUrl).map(this.extractLevelGraphRelations).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getLevelGraphRelation - Send GET Level Graph Relations REQUEST
     *
     * @param - id: number - ID of the LevelGraphRelation which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.getLevelGraphRelation = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHRELATION]: Send GET Level Graph Relations Request with ID: ' + id, LevelGraphRelationService_1.name);
        return this.http.get(this.levelGraphRelationUrl + '/' + id).map(this.extractLevelGraphRelation).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createLevelGraphRelation - Send POST Level Graph Relations REQUEST
     *
     * @param - levelGraphRelation: LevelGraphRelation - LevelGraphRelation which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.createLevelGraphRelation = function (levelGraphRelation) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHRELATION]: Send POST Level Graph Relation Request', LevelGraphRelationService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVELGRAPHRELATION]: ' + JSON.stringify(levelGraphRelation), LevelGraphRelationService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.levelGraphRelationUrl, levelGraphRelation, options).map(this.extractLevelGraphRelation).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateLevelGraphRelation- Send PUT Level Graph Relations REQUEST
     *
     * @param - levelGraphRelation: LevelGraphRelation - LevelGraphRelation which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.updateLevelGraphRelation = function (levelGraphRelation) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHRELATION]: Send PUT Level Graph Relation Request', LevelGraphRelationService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVELGRAPHRELATION]: ' + JSON.stringify(levelGraphRelation), LevelGraphRelationService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.levelGraphRelationUrl + '/' + levelGraphRelation.id, levelGraphRelation, options).map(this.extractLevelGraphRelation).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteLevelGraphRelation - Send DELETE Level Graph Relations REQUEST
     *
     * @param - id: number - ID of the LevelGraphRelation which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.deleteLevelGraphRelation = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHRELATION]: Send DELETE Level Graph Relation Request', LevelGraphRelationService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.levelGraphRelationUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractLevelGraphRelations - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.extractLevelGraphRelations = function (res) {
        var body = res.json();
        var levelGraphRelationList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Extract Level Graph Relation Data List', LevelGraphRelationService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPHRELATION]: ' + JSON.stringify(body), LevelGraphRelationService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var levelGraphRelation = body_1[_i];
            var tempLevelGraphRelation = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__["a" /* LevelGraphRelation */](levelGraphRelation.sourceLevelDepth, levelGraphRelation.targetLevelDepth, levelGraphRelation.sourceNodeId, levelGraphRelation.targetNodeId, levelGraphRelation.levelGraphId, levelGraphRelation.path, levelGraphRelation.levelGraphRelationType);
            tempLevelGraphRelation = levelGraphRelation;
            levelGraphRelationList.push(levelGraphRelation);
        }
        return levelGraphRelationList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractLevelGraphRelation - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.extractLevelGraphRelation = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Extract Level Graph Relation Data', LevelGraphRelationService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPHRELATION]: ' + JSON.stringify(body), LevelGraphRelationService_1.name);
        var levelGraphRelation = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__["a" /* LevelGraphRelation */](body.sourceLevelDepth, body.targetLevelDepth, body.sourceNodeId, body.targetNodeId, body.levelGraphId, body.path, body.levelGraphRelationType);
        levelGraphRelation = body;
        return levelGraphRelation || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError- Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return LevelGraphRelationService;
}());
LevelGraphRelationService = LevelGraphRelationService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], LevelGraphRelationService);

var LevelGraphRelationService_1, _a;
//# sourceMappingURL=levelgraphrelation.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTemplateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - NodeTemplateService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for NodeTemplates
 *
 *********************************************************************************************************************************************************************************************************/
var NodeTemplateService = NodeTemplateService_1 = (function () {
    function NodeTemplateService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.nodetemplateUrl = '/api/nodetemplates';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getNodeTemplates - Send GET all NodeTemplates REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.getNodeTemplates = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETEMPLATE] Send GET Node Templates Request', NodeTemplateService_1.name);
        return this.http.get(this.nodetemplateUrl).map(this.extractNodeTemplates).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getNodeTemplate - Send GET NodeTemplate REQUEST
     *
     * @param - id: number - ID of the NodeTemplate which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.getNodeTemplate = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETEMPLATE]: Send GET Node Topology Request with ID: ' + id, NodeTemplateService_1.name);
        return this.http.get(this.nodetemplateUrl + '/' + id).map(this.extractNodeTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createNodeTemplate - Send POST NodeTemplates REQUEST
     *
     * @param - nodeTemplate: NodeTemplate - NodeTemplate which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.createNodeTemplate = function (nodeTemplate) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETEMPLATE] Send POST Node Template Request', NodeTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - NODETEMPLATE]' + JSON.stringify(nodeTemplate), NodeTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.nodetemplateUrl, nodeTemplate, options).map(this.extractNodeTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateNodeTemplate - Send PUT NodeTemplate REQUEST
     *
     * @param - nodeTemplate: NodeTemplate - NodeTemplate which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.updateNodeTemplate = function (nodeTemplate) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETEMPLATE] Send PUT Node Template Request', NodeTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - NODETEMPLATE] ' + JSON.stringify(nodeTemplate), NodeTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.nodetemplateUrl + '/' + nodeTemplate.id, nodeTemplate, options).map(this.extractNodeTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteNodeTemplate - Send DELETE NodeTemplate REQUEST
     *
     * @param - id: number - ID of the Level which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.deleteNodeTemplate = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETEMPLATE] Send DELETE NodeTemplate Request with ID: ' + id, NodeTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.nodetemplateUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractNodeTemplates - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.extractNodeTemplates = function (res) {
        var body = res.json();
        var nodeTemplateList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - NODETEMPLATE]: Extract Data of Response Body', NodeTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - NODETEMPLATE]: ' + JSON.stringify(body), NodeTemplateService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var nodeTemplate = body_1[_i];
            var tempNodeTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__["a" /* NodeTemplate */]();
            tempNodeTemplate = nodeTemplate;
            nodeTemplateList.push(tempNodeTemplate);
        }
        return nodeTemplateList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractNodeTemplate - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.extractNodeTemplate = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - NODETEMPLATE]: Extract Data of Response Body', NodeTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - NODETEMPLATE]: ' + JSON.stringify(body), NodeTemplateService_1.name);
        var nodeTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__["a" /* NodeTemplate */]();
        nodeTemplate = body;
        return nodeTemplate || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - Error Handling
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return NodeTemplateService;
}());
NodeTemplateService = NodeTemplateService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], NodeTemplateService);

var NodeTemplateService_1, _a;
//# sourceMappingURL=nodetemplate.service.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTemplateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - RelationshipTemplateService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for Relationship Templates
 *
 *********************************************************************************************************************************************************************************************************/
var RelationshipTemplateService = RelationshipTemplateService_1 = (function () {
    function RelationshipTemplateService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.relationshipTempalteUrl = '/api/relationshiptemplates';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getRelationshipTemplates - Send GET all RelationshipTemplate REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.getRelationshipTemplates = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTEMPLATE] Send GET Relationship Templates Request', RelationshipTemplateService_1.name);
        return this.http.get(this.relationshipTempalteUrl).map(this.extractRelationshipTemplateDataList).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getRelationshipTemplate - Send GET RelationshipTemplate REQUEST
     *
     * @param - id: number - ID of the RelationshipTemplate which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.getRelationshipTemplate = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTEMPLATE]: Send GET Relationship Template Request with ID: ' + id, RelationshipTemplateService_1.name);
        return this.http.get(this.relationshipTempalteUrl + '/' + id).map(this.extractRelationshipTemplateData).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createRelationshipTemplate - Send POST RelationshipTemplate REQUEST
     *
     * @param - relationshipTemplate: RelationshipTemplate - RelationshipTemplate which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.createRelationshipTemplate = function (relationshipTemplate) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTEMPLATE] Send POST Relationship Templates Request', RelationshipTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - RELATIONSHIPTEMPLATE]' + JSON.stringify(relationshipTemplate), RelationshipTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.relationshipTempalteUrl, relationshipTemplate, options).map(this.extractRelationshipTemplateData).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateRelationshipTemplate - Send PUT RelationshipTemplate REQUEST
     *
     * @param - relationshipTemplate: RelationshipTemplate - RelationshipTemplate which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.updateRelationshipTemplate = function (relationshipTemplate) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTEMPLATE] Send PUT Request Relationship Template', RelationshipTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - RELATIONSHIPTEMPLATE] ' + JSON.stringify(relationshipTemplate), RelationshipTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.relationshipTempalteUrl + '/' + relationshipTemplate.id, relationshipTemplate, options).map(this.extractRelationshipTemplateData).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteRelationshipTemplate - Send DELETE RelationshipTemplate REQUEST
     *
     * @param - id: number - ID of the RelationshipTemplate which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.deleteRelationshipTemplate = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTEMPLATE] Send DELETE Relationship Templates Request with ID: ' + id, RelationshipTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.relationshipTempalteUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractRelationshipTemplateDataList - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.extractRelationshipTemplateDataList = function (res) {
        var body = res.json();
        var relationshipTemplateList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - RELATIONSHIPTEMPLATE]: Extract Data of Response Body', RelationshipTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - RELATIONSHIPTEMPLATE]: ' + JSON.stringify(body), RelationshipTemplateService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var relationshipTemplate = body_1[_i];
            var tempRelationshipTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */](relationshipTemplate.sourceNodeId, relationshipTemplate.targetNodeId, relationshipTemplate.path, relationshipTemplate.relationshipTypeId, relationshipTemplate.topologyTemplateId);
            tempRelationshipTemplate = relationshipTemplate;
            relationshipTemplateList.push(tempRelationshipTemplate);
        }
        return relationshipTemplateList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractRelationshipTemplateData - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.extractRelationshipTemplateData = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - RELATIONSHIPTEMPLATE]: Extract Data of Response Body', RelationshipTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - RELATIONSHIPTEMPLATE]: ' + JSON.stringify(body), RelationshipTemplateService_1.name);
        var relationshipTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */](body.sourceNodeId, body.targetNodeId, body.path, body.relationshipTypeId, body.topologyTemplateId);
        relationshipTemplate = body;
        return relationshipTemplate || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return RelationshipTemplateService;
}());
RelationshipTemplateService = RelationshipTemplateService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], RelationshipTemplateService);

var RelationshipTemplateService_1, _a;
//# sourceMappingURL=relationshiptemplate.service.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LevelGraphDetailsComponent = LevelGraphDetailsComponent_1 = (function () {
    function LevelGraphDetailsComponent(route, router, levelGraphService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.levelGraphService = levelGraphService;
        this.flashMessageService = flashMessageService;
        this.currentLevelGraph = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method ngOnInit is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphDetailsComponent', LevelGraphDetailsComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentLevelGraph.id = params['id'] || null;
        });
        this.retrieveLevelGraph(this.currentLevelGraph.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveLevelGraph - Call the LevelGraphService for loading repository from database into the application and subscribe for a callback.
     *
     * @param - id: number - ID of the LevelGraph which should be loaded from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphDetailsComponent.prototype.retrieveLevelGraph = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraph Data', LevelGraphDetailsComponent_1.name);
        this.levelGraphService.getLevelGraph(id)
            .subscribe(function (levelGraphResponse) {
            _this.currentLevelGraph = levelGraphResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('LevelGraph sucessfully retrieved.', LevelGraphDetailsComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    return LevelGraphDetailsComponent;
}());
LevelGraphDetailsComponent = LevelGraphDetailsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-levelgrahdetails',
        template: __webpack_require__(753),
        styles: [__webpack_require__(686)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - LevelGraphDetailsComponent - Lazy loaded component as wrapper for all other components in the LevelGraphDetailsComponent
     *
     * @field - currentLevelGraph: LevelGraph - LevelGraph which is currently displayed
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may
     *                                     cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], LevelGraphDetailsComponent);

var LevelGraphDetailsComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=levelgrahdetails.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraphrelation_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelationDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LevelGraphRelationDetailsComponent = LevelGraphRelationDetailsComponent_1 = (function () {
    function LevelGraphRelationDetailsComponent(route, router, levelGraphRelationService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.levelGraphRelationService = levelGraphRelationService;
        this.flashMessageService = flashMessageService;
        this.currentLevelGraphRelation = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__["a" /* LevelGraphRelation */](null, null, null, null, null, null, null);
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphRelationDetailsComponent', LevelGraphRelationDetailsComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentLevelGraphRelation.id = params['id'] || null;
        });
        this.retrieveLevelGraphRelation(this.currentLevelGraphRelation.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveLevelGraphRelation - Call the LevelGraphRelationService for loading LevelGraphNode from database into the application and subscribe for a callback.
     *
     * @param - id: number - ID of the LevelGraphRelation which should be loaded from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationDetailsComponent.prototype.retrieveLevelGraphRelation = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraphRelation Data', LevelGraphRelationDetailsComponent_1.name);
        this.levelGraphRelationService.getLevelGraphRelation(id)
            .subscribe(function (levelGraphRelationResponse) {
            _this.currentLevelGraphRelation = levelGraphRelationResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('LevelGraphRelation sucessfully retrieved.', LevelGraphRelationDetailsComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    return LevelGraphRelationDetailsComponent;
}());
LevelGraphRelationDetailsComponent = LevelGraphRelationDetailsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-levelgraphrelationdetails',
        template: __webpack_require__(760),
        styles: [__webpack_require__(693)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - LevelGraphRelationDetailsComponent - Lazy loaded component as wrapper for all other components in the LevelGraphRelationDetailsComponent
     *
     * @field - currentLevelGraphRelation: LevelGraphRelation - LevelGraphRelation which is currently displayed
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraphrelation_service__["a" /* LevelGraphRelationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraphrelation_service__["a" /* LevelGraphRelationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], LevelGraphRelationDetailsComponent);

var LevelGraphRelationDetailsComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=levelgraphrelationdetails.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    /*********************************************************************************************************************************************************************************************************
     *
     * @component - AppComponent - Lazy loaded component AppComponent
     *
     * @author - Arthur Kaul
     *
     ********************************************************************************************************************************************************************************************************/
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(746),
        styles: [__webpack_require__(679)]
    })
    /*********************************************************************************************************************************************************************************************************
     *
     * @component - AppComponent - Lazy loaded component AppComponent
     *
     * @author - Arthur Kaul
     *
     ********************************************************************************************************************************************************************************************************/
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_exportxml_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_repository_repository_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dataservices_topologytemplate_topologytemplate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dataservices_types_nodetype_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// URL for XML Import
var URL_IMPORT = '/api/import/definition';
// URL for XML Export
var URL_EXPORT = '/definition';
var AdministrationComponent = AdministrationComponent_1 = (function () {
    function AdministrationComponent(repositoryService, topologyTemplateService, levelGraphService, nodeTypeService, xmlExportSerivce) {
        this.repositoryService = repositoryService;
        this.topologyTemplateService = topologyTemplateService;
        this.levelGraphService = levelGraphService;
        this.nodeTypeService = nodeTypeService;
        this.xmlExportSerivce = xmlExportSerivce;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploader"]({});
        this.topologyTemplates = [];
        this.levelGraphs = [];
        this.repositories = [];
    }
    ;
    AdministrationComponent.prototype.ngOnInit = function () {
        this.retrieveTopologyTemplates();
        this.retrieveRepositories();
        this.retrieveLevelGraphs();
    };
    /********************************************************************************************************************************************************************************************************
     *
     *  @method - retrieveTopologyTemplates - Call the TopologyTemplateService for loading all TopologyTemplates from database into the application
     *                                        and subscribe for a callback. Currently no pagination/streaming of data is supported
     *
     *******************************************************************************************************************************************************************************************************/
    AdministrationComponent.prototype.retrieveTopologyTemplates = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve TopologyTemplate Data', AdministrationComponent_1.name);
        this.topologyTemplateService.getTopologyTemplates()
            .subscribe(function (topologyTemplateResponse) {
            _this.topologyTemplates = topologyTemplateResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Topology Template sucessfully retrieved.', AdministrationComponent_1.name);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveLevelGraphs - Call the LevelGraphService for loading all LevelGraphs from database into the application and subscribe
     *                                 for a callback. Currently no pagination/streaming of data is supported
     *
     *******************************************************************************************************************************************************************************************************/
    AdministrationComponent.prototype.retrieveLevelGraphs = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraph Data', AdministrationComponent_1.name);
        this.levelGraphService.getLevelGraphs()
            .subscribe(function (levelGraphsResponse) {
            _this.levelGraphs = levelGraphsResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graphs sucessfully retrieved.', AdministrationComponent_1.name);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveRepositories - Call the RepositoryService for loading all repositories from database into the application and subscribe
     *                                  for a callback. Currently no pagination/streaming of data is supported
     *
     *******************************************************************************************************************************************************************************************************/
    AdministrationComponent.prototype.retrieveRepositories = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve Repository Data', AdministrationComponent_1.name);
        this.repositoryService.getRepositories()
            .subscribe(function (repositoriesResponse) {
            _this.repositories = repositoriesResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repositories sucessfully retrieved.', AdministrationComponent_1.name);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - importXml - Call the ImportService for upload a XML file to the server component and import the data of the XML file
     *
     *******************************************************************************************************************************************************************************************************/
    AdministrationComponent.prototype.importDefinition = function () {
        var _this = this;
        this.uploader.setOptions({ url: URL_IMPORT });
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            response = JSON.parse(response);
            for (var _i = 0, _a = response.levelGraphs; _i < _a.length; _i++) {
                var levelGraph = _a[_i];
                _this.levelGraphService.updateLevelGraph(levelGraph)
                    .subscribe(function (levelGraphResponse) {
                    _this.levelGraphs.push(levelGraphResponse);
                }, function (error) {
                });
            }
            for (var _b = 0, _c = response.topologyTemplates; _b < _c.length; _b++) {
                var topologyTemplates = _c[_b];
                _this.topologyTemplateService.updateTopologyTemplate(topologyTemplates)
                    .subscribe(function (topologyTemplateResponse) {
                    _this.topologyTemplates.push(topologyTemplateResponse);
                }, function (error) {
                });
            }
            _this.repositories.push(response.repositories);
        };
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - exportLevelGraph - Call the ExportService for retrieve a repository in XML data structure and export the data of the body as XML file to Client/Bowser
     *
     * @param - levelGraph: LevelGraph - LevelGraph which should be exported from the database
     *
     *******************************************************************************************************************************************************************************************************/
    AdministrationComponent.prototype.exportDefinition = function () {
        this.xmlExportSerivce.getXmlFile(URL_EXPORT).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_8_file_saver__["saveAs"](res, 'ArchRefDefinition.xml');
        }, function (error) {
        });
    };
    return AdministrationComponent;
}());
AdministrationComponent = AdministrationComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-administration',
        template: __webpack_require__(747),
        styles: [__webpack_require__(680)]
    })
    /*****************************************************************************************************************************
     *
     * @component - AdministrationComponent - Lazy loaded component as wrapper for all other components in the AdministrationComponent
     *
     * @author - Arthur Kaul
     *
     ****************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_repository_repository_service__["a" /* RepositoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_repository_repository_service__["a" /* RepositoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_exportxml_service__["a" /* ExportXmlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_exportxml_service__["a" /* ExportXmlService */]) === "function" && _e || Object])
], AdministrationComponent);

var AdministrationComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=administration.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    /*****************************************************************************************************************************
     *
     * @component - DashboardComponent - Lazy loaded component as wrapper for all other application components and for displaying the start
     *                                   page of the application
     *
     * @author - Arthur Kaul
     *
     ****************************************************************************************************************************/
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-cmp',
        template: __webpack_require__(748),
        styles: [__webpack_require__(681)]
    })
    /*****************************************************************************************************************************
     *
     * @component - DashboardComponent - Lazy loaded component as wrapper for all other application components and for displaying the start
     *                                   page of the application
     *
     * @author - Arthur Kaul
     *
     ****************************************************************************************************************************/
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants_levelgraphrelationtype__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_datamodels_entity_entity__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_datamodels_levelgraph_level__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_datamodels_levelgraph_levelgraph__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_datamodels_levelgraph_levelgraphnode__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_datamodels_levelgraph_levelgraphrelation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_datamodels_metrics_expectedproperty__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_datamodels_metrics_providedproperty__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_datamodels_utility_path__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_datamodels_repository_repository__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_repository_repository_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_levelgraph_level_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_levelgraph_levelgraphnode_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_levelgraph_levelgraphrelation_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_metrics_expectedproperty_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_metrics_providedpropertyservice_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphModellerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var LevelGraphModellerComponent = LevelGraphModellerComponent_1 = (function () {
    function LevelGraphModellerComponent(route, router, levelGraphService, repositoryService, levelGraphNodeService, levelService, levelGraphRelationService, providedPropertyService, expectedPropertySerivce) {
        this.route = route;
        this.router = router;
        this.levelGraphService = levelGraphService;
        this.repositoryService = repositoryService;
        this.levelGraphNodeService = levelGraphNodeService;
        this.levelService = levelService;
        this.levelGraphRelationService = levelGraphRelationService;
        this.providedPropertyService = providedPropertyService;
        this.expectedPropertySerivce = expectedPropertySerivce;
        this.repositories = [];
        this.selectedRepository = new __WEBPACK_IMPORTED_MODULE_13__shared_datamodels_repository_repository__["a" /* Repository */]();
        this.entity = new __WEBPACK_IMPORTED_MODULE_4__shared_datamodels_entity_entity__["a" /* Entity */]();
        this.createdProvidedProperty = new __WEBPACK_IMPORTED_MODULE_10__shared_datamodels_metrics_providedproperty__["a" /* ProvidedProperty */]('Unnamed', 'Undefined');
        this.createdExpectedProperty = new __WEBPACK_IMPORTED_MODULE_9__shared_datamodels_metrics_expectedproperty__["a" /* ExpectedProperty */]('Unnamed', 'Undefined');
        this.currentLevelGraph = new __WEBPACK_IMPORTED_MODULE_6__shared_datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
        this.currentLevelGraphNode = new __WEBPACK_IMPORTED_MODULE_7__shared_datamodels_levelgraph_levelgraphnode__["a" /* LevelGraphNode */]();
        this.currentLevelGraphRelation = new __WEBPACK_IMPORTED_MODULE_8__shared_datamodels_levelgraph_levelgraphrelation__["a" /* LevelGraphRelation */](null, null, null, null, null, null, null);
        this.lastMousePositionY = 0;
        this.lastMousePositionX = 0;
        this.drag = false;
        this.drawRelation = false;
        this.moveNode = false;
        this.changeLevelHeight = false;
        this.toolList = [
            { name: 'Move Node', checked: true },
            { name: 'ConnectOverTo', checked: false },
            { name: 'RefineTo', checked: false }
        ];
        this.levelGraphRelationTypes = [
            { name: 'ConnectOverTo', checked: true },
            { name: 'RefineTo', checked: true },
        ];
    }
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Initialize LevelGraphModellerComponent', LevelGraphModellerComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentLevelGraph.id = params['id'] || '';
        });
        //    this.flashMessage.timeoutInMS = Constants.FLASHMESSAGETIMEOUT;
        this.selectedRepository.name = 'Select Repository';
        this.retrieveLevelGraph(this.currentLevelGraph.id);
        this.retrieveRepositories();
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Retrieve Methods
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - retrieveRepositories -Call the RepositoryService for loading all repositories from database into the application and subscribe
     *                                 for a callback. Currently no pagination/streaming of data is supported
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.retrieveRepositories = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve Repositories Data', LevelGraphModellerComponent_1.name);
        this.repositoryService.getRepositories()
            .subscribe(function (repositoriesResponse) {
            _this.repositories = repositoriesResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repositories sucessfully retrieved.', LevelGraphModellerComponent_1.name);
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - retrieveLevelGraph - Call the LevelGraphService for loading repository from database into the application and subscribe
     *                                 for a callback.
     *
     * @param id: number - ID of the level graph which should be retrieved from the database
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.retrieveLevelGraph = function (id) {
        var _this = this;
        this.levelGraphService.getLevelGraph(id)
            .subscribe(function (levelGraphResponse) {
            _this.currentLevelGraph = levelGraphResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph with id: ' + levelGraphResponse.id + ' was retrieved sucessfully.', LevelGraphModellerComponent_1.name);
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Update Methods
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - updateLevelGraph - Call the LevelGraphService Update Method for update the data in the database
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.updateLevelGraph = function () {
        var _this = this;
        this.levelGraphService.updateLevelGraph(this.currentLevelGraph)
            .subscribe(function (levelGraph) {
            _this.currentLevelGraph = levelGraph;
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Create Methods
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - createLevelGraphNode - Call the LevelGraphNodeService for creating a new LevelGraphNode in the database
     *                                  and subscribe for a callback
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.createLevelGraphNode = function (levelGraphNode) {
        var _this = this;
        this.levelGraphNodeService.createLevelGraphNode(levelGraphNode)
            .subscribe(function (levelGraphNodeResponse) {
            _this.currentLevelGraph.levelGraphNodes.push(levelGraphNodeResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph Node with id: ' + levelGraphNodeResponse.id + ' was created sucessfully.', LevelGraphModellerComponent_1.name);
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - createLevelGraphRelation - Call the LevelGraphRelationService for creating a new LevelGraphRelation in the database
     *                                      and subscribe for a callback
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.createLevelGraphRelation = function () {
        var _this = this;
        this.levelGraphRelationService.createLevelGraphRelation(this.currentLevelGraphRelation)
            .subscribe(function (levelGraphRelationResponse) {
            _this.currentLevelGraph.levelGraphRelations.push(levelGraphRelationResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph Relation created sucessfully.', LevelGraphModellerComponent_1.name);
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Delete Methods
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - deleteLevelGraphNode - Call the LevelGraphNodeService for delete a LevelGraphNode from the database and subscribe for a callback.
     *
     * @param - levelGraphNode: LevelGraphNode - LevelGraphNode witch should be deleted
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.deleteLevelGraphNode = function (levelGraphNode) {
        var _this = this;
        this.levelGraphNodeService.deleteLevelGraphNode(levelGraphNode.id).subscribe(function (levelGraphNodeResponse) {
            for (var _i = 0, _a = _this.currentLevelGraph.levelGraphRelations; _i < _a.length; _i++) {
                var levelGraphRelation = _a[_i];
                if (levelGraphRelation.sourceNodeId === levelGraphNode.id) {
                    for (var _b = 0, _c = _this.currentLevelGraph.levelGraphNodes; _b < _c.length; _b++) {
                        var node = _c[_b];
                        if (node.id === levelGraphRelation.targetNodeId) {
                            node.inLevelGraphRelations = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphRelation.id, node.inLevelGraphRelations);
                        }
                    }
                    _this.currentLevelGraph.levelGraphRelations = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphRelation.id, _this.currentLevelGraph.levelGraphRelations);
                }
                if (levelGraphRelation.targetNodeId === levelGraphNode.id) {
                    for (var _d = 0, _e = _this.currentLevelGraph.levelGraphNodes; _d < _e.length; _d++) {
                        var node = _e[_d];
                        if (node.id === levelGraphRelation.sourceNodeId) {
                            node.outLevelGraphRelations = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphRelation.id, node.outLevelGraphRelations);
                        }
                    }
                    _this.currentLevelGraph.levelGraphRelations = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphRelation.id, _this.currentLevelGraph.levelGraphRelations);
                }
            }
            _this.currentLevelGraph.levelGraphNodes = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphNode.id, _this.currentLevelGraph.levelGraphNodes);
            //    this.levelGraphService.getLevelGraph(this.currentLevelGraph.id).subscribe(levelGraphResponse => this.currentLevelGraph = levelGraphResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph Node with id: ' + levelGraphNode.id + ' was deleted sucessfully.', LevelGraphModellerComponent_1.name);
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - delelteLevelGraphRelation - Delete level graph relation and update the level graph
     *
     * @param - levelGraphRelation: LevelGraphRelation - LevelGraphRelation witch should be deleted
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.deleteLevelGraphRelation = function (levelGraphRelation) {
        var _this = this;
        this.levelGraphRelationService.deleteLevelGraphRelation(levelGraphRelation.id)
            .subscribe(function (levelGraphRelationResponse) {
            for (var _i = 0, _a = _this.currentLevelGraph.levelGraphNodes; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.id === levelGraphRelation.sourceNodeId) {
                    node.outLevelGraphRelations = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphRelation.id, node.outLevelGraphRelations);
                }
                if (node.id === levelGraphRelation.targetNodeId) {
                    node.inLevelGraphRelations = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphRelation.id, node.inLevelGraphRelations);
                }
            }
            _this.currentLevelGraph.levelGraphRelations = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].deleteElementFromArry(levelGraphRelation.id, _this.currentLevelGraph.levelGraphRelations);
            // this.levelGraphService.getLevelGraph(this.currentLevelGraph.id).subscribe(levelGraphResponse => this.currentLevelGraph = levelGraphResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph Relation with id: ' + levelGraphRelation.id + ' was deleted sucessfully.', LevelGraphModellerComponent_1.name);
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Move Node Event Handling
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - startMoveNode - Start moving a node in the level area if the moving tool is selected
     *
     * @param - event: MouseEvent - Event Object of the onMouseDown Event
     * @param - levelGraphNode: LevelGraphNode - LevelGraphNode which should be moved
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.startMoveNode = function (event, levelGraphNode) {
        if (!this.moveNode && this.toolList[0].checked) {
            this.lastMousePositionY = event.offsetY;
            this.lastMousePositionX = event.offsetX;
            this.currentLevelGraphNode = levelGraphNode;
            this.moveNode = true;
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - onMoveNode - Move a node and his in and outgoing edges in his level area if the moving tool is selected
     *
     * @param - event: MouseEvent - Event Object of the onMouseMove Event
     * @param - level: Level - Level in which the node should be moved
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onMoveNode = function (event, level) {
        if (this.moveNode) {
            var newMousePositionY = event.offsetY;
            var newMousePositionX = event.offsetX;
            var deltaY = (newMousePositionY - this.lastMousePositionY);
            var deltaX = (newMousePositionX - this.lastMousePositionX);
            // Change Node Position
            if (((this.currentLevelGraphNode.x + deltaX) > 0)) {
                this.currentLevelGraphNode.x = (this.currentLevelGraphNode.x + deltaX);
            }
            if ((this.currentLevelGraphNode.y + deltaY) > 0 && ((this.currentLevelGraphNode.y + deltaY + this.currentLevelGraphNode.height) < (level.height))) {
                this.currentLevelGraphNode.y = (this.currentLevelGraphNode.y + deltaY);
            }
            // Change Relation Position
            for (var _i = 0, _a = this.currentLevelGraph.levelGraphRelations; _i < _a.length; _i++) {
                var levelGraphRelation = _a[_i];
                // Change Incoming Relation End Point Position
                if (this.currentLevelGraphNode.id === levelGraphRelation.targetNodeId) {
                    if (levelGraphRelation.levelGraphRelationType === __WEBPACK_IMPORTED_MODULE_3__shared_constants_levelgraphrelationtype__["a" /* LevelGraphRelationType */].REFINE_TO) {
                        if ((levelGraphRelation.path.points[1].x + deltaX) > (0 + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LABELOFFSET + (__WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEWIDTH / 2))) {
                            levelGraphRelation.path.points[1].x = levelGraphRelation.path.points[1].x + deltaX;
                        }
                        if ((levelGraphRelation.path.points[1].y + deltaY) > level.y + 0 + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2 && ((levelGraphRelation.path.points[1].y + deltaY) < (level.y + level.height - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2))) {
                            levelGraphRelation.path.points[1].y = levelGraphRelation.path.points[1].y + deltaY;
                        }
                    }
                    else {
                        if ((levelGraphRelation.path.points[1].x + deltaX) > (0 + (__WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEWIDTH / 2))) {
                            levelGraphRelation.path.points[1].x = levelGraphRelation.path.points[1].x + deltaX;
                        }
                        if ((levelGraphRelation.path.points[1].y + deltaY) > 0 + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2 && ((levelGraphRelation.path.points[1].y + deltaY) < (level.height - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2))) {
                            levelGraphRelation.path.points[1].y = levelGraphRelation.path.points[1].y + deltaY;
                        }
                    }
                }
                // Change Outgoing Relation Start Point Position
                if (this.currentLevelGraphNode.id === levelGraphRelation.sourceNodeId) {
                    if (levelGraphRelation.levelGraphRelationType === __WEBPACK_IMPORTED_MODULE_3__shared_constants_levelgraphrelationtype__["a" /* LevelGraphRelationType */].REFINE_TO) {
                        if ((levelGraphRelation.path.points[0].x + deltaX) > 0 + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LABELOFFSET + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEWIDTH / 2) {
                            levelGraphRelation.path.points[0].x = levelGraphRelation.path.points[0].x + deltaX;
                        }
                        if ((levelGraphRelation.path.points[0].y + deltaY) > level.y + 0 + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2 && ((levelGraphRelation.path.points[0].y + deltaY) < (level.y + level.height - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2))) {
                            levelGraphRelation.path.points[0].y = levelGraphRelation.path.points[0].y + deltaY;
                        }
                    }
                    else {
                        if ((levelGraphRelation.path.points[0].x + deltaX) > 0 + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEWIDTH / 2) {
                            levelGraphRelation.path.points[0].x = levelGraphRelation.path.points[0].x + deltaX;
                        }
                        if ((levelGraphRelation.path.points[0].y + deltaY) > 0 + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2 && ((levelGraphRelation.path.points[0].y + deltaY) < (level.height - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2))) {
                            levelGraphRelation.path.points[0].y = levelGraphRelation.path.points[0].y + deltaY;
                        }
                    }
                }
                var tempPath = new __WEBPACK_IMPORTED_MODULE_11__shared_datamodels_utility_path__["a" /* Path */](levelGraphRelation.path.points);
                levelGraphRelation.path = tempPath;
            }
            this.lastMousePositionY = event.offsetY;
            this.lastMousePositionX = event.offsetX;
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - stopMoveNode - Stop the moving event of a node and his in and outgoing edges in his level area if the moving tool is selected
     *
     * @param - event: MouseEvent - Event Object of the onMouseUp Event
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.stopMoveNode = function (event) {
        if (this.moveNode) {
            this.lastMousePositionY = event.offsetY;
            this.lastMousePositionX = event.offsetX;
            this.updateLevelGraph();
            this.moveNode = false;
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Draw Relation Event Handling
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - startDrawRelation - Start the draw relation event if one of the draw relation tool is selected
     *
     * @param - event: MouseEvent - Event Object of the onMouseDown Event
     * @param - level: Level - Level of the source node
     * @param - sourceNode: LevelGraphNode - Source Node of the LevelGraphRelation
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.startDrawRelation = function (event, level, sourceNode) {
        if (this.toolList[1].checked || this.toolList[2].checked) {
            this.drawRelation = true;
            this.lastMousePositionY = event.offsetY;
            this.lastMousePositionX = event.offsetX;
            var levelGraphRelationType = void 0;
            var startPoint = void 0;
            var endPoint = void 0;
            if (this.toolList[2].checked) {
                levelGraphRelationType = __WEBPACK_IMPORTED_MODULE_3__shared_constants_levelgraphrelationtype__["a" /* LevelGraphRelationType */].REFINE_TO;
                startPoint = new __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__["a" /* Point */](this.lastMousePositionX, this.lastMousePositionY);
                endPoint = new __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__["a" /* Point */](this.lastMousePositionX - 5, this.lastMousePositionY - 5);
            }
            else {
                startPoint = new __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__["a" /* Point */](this.lastMousePositionX - 50, this.lastMousePositionY - level.y);
                endPoint = new __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__["a" /* Point */](this.lastMousePositionX - 50 - 5, this.lastMousePositionY - level.y - 5);
                levelGraphRelationType = __WEBPACK_IMPORTED_MODULE_3__shared_constants_levelgraphrelationtype__["a" /* LevelGraphRelationType */].CONNECT_OVER_TO;
            }
            var tempPoints = [];
            tempPoints.push(startPoint);
            tempPoints.push(endPoint);
            var tempPath = new __WEBPACK_IMPORTED_MODULE_11__shared_datamodels_utility_path__["a" /* Path */](tempPoints);
            this.currentLevelGraphRelation = new __WEBPACK_IMPORTED_MODULE_8__shared_datamodels_levelgraph_levelgraphrelation__["a" /* LevelGraphRelation */](level.depth, level.depth, sourceNode.id, sourceNode.id, this.currentLevelGraph.id, tempPath, levelGraphRelationType);
            this.currentLevelGraphRelation.levelGraph = this.currentLevelGraph;
            this.currentLevelGraphRelation.sourceLevelGraphNode = sourceNode;
            this.currentLevelGraphRelation.sourceLevel = level;
            this.currentLevelGraphRelation.sourceLevelId = level.id;
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - onDrawRelation - Update the end point position of the path of a relation
     *
     * @param - event: MouseEvent - Event Object of the onMouseMove Event
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onDrawRelation = function (event) {
        if (this.drawRelation) {
            var newMousePositionY = event.offsetY;
            var newMousePositionX = event.offsetX;
            var deltaY = (newMousePositionY - this.lastMousePositionY);
            var deltaX = (newMousePositionX - this.lastMousePositionX);
            this.currentLevelGraphRelation.path.points[1].x = this.currentLevelGraphRelation.path.points[1].x + deltaX;
            this.currentLevelGraphRelation.path.points[1].y = this.currentLevelGraphRelation.path.points[1].y + deltaY;
            this.currentLevelGraphRelation.path.updatePath();
            this.lastMousePositionY = newMousePositionY;
            this.lastMousePositionX = newMousePositionX;
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - stopDrawRelation - Stop the draw relation event and draw a relation if it is allowed to draw it
     *
     * @param - event: MouseEvent - Event Object of the onMouseUp Event
     * @param - targetNode: LevelGraphNode - Target Node of the relation which should be draw
     * @param - targetLevel: Level - Level of the target node
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.stopDrawRelation = function (event, targetNode, targetLevel) {
        if (this.drawRelation) {
            var sourceNode = this.currentLevelGraphRelation.sourceLevelGraphNode;
            var sourceCenterX = sourceNode.x + sourceNode.width / 2;
            var sourceCenterY = sourceNode.y + sourceNode.height / 2;
            var targetCenterX = targetNode.x + targetNode.width / 2;
            var targetCenterY = targetNode.y + targetNode.height / 2;
            this.currentLevelGraphRelation.targetLevelDepth = targetLevel.depth;
            this.currentLevelGraphRelation.targetLevel = targetLevel;
            this.currentLevelGraphRelation.targetLevelId = targetLevel.id;
            this.currentLevelGraphRelation.targetNodeId = targetNode.id;
            this.currentLevelGraphRelation.targetLevelGraphNode = targetNode;
            if (!this.currentLevelGraphRelation.isSourceNodeEqualTargetNode()) {
                if (!this.isRelationExist(sourceNode, targetNode)) {
                    if (this.toolList[1].checked && this.isConnectedToRelationDrawAllowed(sourceNode, targetNode)) {
                        this.currentLevelGraphRelation.path.points[0].x = sourceCenterX;
                        this.currentLevelGraphRelation.path.points[0].y = sourceCenterY;
                        this.currentLevelGraphRelation.path.points[1].y = targetCenterY;
                        this.currentLevelGraphRelation.path.points[1].x = targetCenterX;
                        this.currentLevelGraphRelation.path.updatePath();
                        this.createLevelGraphRelation();
                    }
                    else if (this.toolList[2].checked && this.isRefineToRelationDrawAllowed(sourceNode, targetNode, targetLevel)) {
                        this.currentLevelGraphRelation.path.points[0].x = sourceCenterX + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LABELOFFSET;
                        this.currentLevelGraphRelation.path.points[1].y = targetCenterY + targetLevel.y;
                        this.currentLevelGraphRelation.path.points[1].x = targetCenterX + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LABELOFFSET;
                        this.currentLevelGraphRelation.path.updatePath();
                        if ((sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE) || (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE)) {
                            this.currentLevelGraphRelation.entryPoint = true;
                            this.currentLevelGraphRelation.exitPoint = true;
                        }
                        sourceNode.providedProperties = sourceNode.providedProperties.concat(targetNode.providedProperties);
                        this.createLevelGraphRelation();
                    }
                }
            }
            else {
                //        this.flashMessage.message = 'Self-Loops are not allowed in a Level Graph';
                //        this.flashMessage.isSuccess = false;
                //        this.flashMessage.isError = true;
                //        this.flashMessageService.display(this.flashMessage);
            }
            this.lastMousePositionY = event.offsetY;
            this.lastMousePositionX = event.offsetX;
            this.drawRelation = false;
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Drag and Drop Event Handling
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - onDrag - is called to start drag and drop of level graph nodes from toolbox to the draw area
     *
     * @param - event: Event - Event Object of the onDrag Event
     * @param - dragData: any, - Level on which the node will be droped
     * @param - typeDragData: any, - Type of the data which is dragged from the toolbox
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onDrag = function (event, dragData, typeDragData) {
        this.currentDragData = dragData;
        this.typeCurrentDragData = typeDragData;
        this.drag = true;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - onDragOver is called to allow a drag over between different div containers
     *
     * @param - event: Event - Event Object of the onDragOver Event
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - onDrop is called to create a LevelGraphNode in the drawArea
     *
     * @param - event: Event - Event Object of the onDrop Event
     * @param - level: Level - Level on which the node will be droped
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onDrop = function (event, level) {
        if (this.drag === true) {
            var levelGraphNode = new __WEBPACK_IMPORTED_MODULE_7__shared_datamodels_levelgraph_levelgraphnode__["a" /* LevelGraphNode */]();
            levelGraphNode.level = level;
            levelGraphNode.levelId = level.id;
            levelGraphNode.levelDepth = level.depth;
            levelGraphNode.levelGraph = this.currentLevelGraph;
            levelGraphNode.levelGraphId = this.currentLevelGraph.id;
            if (event.offsetX - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LABELOFFSET - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEWIDTH / 2 < 0) {
                levelGraphNode.x = 0;
            }
            else {
                levelGraphNode.x = event.offsetX - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LABELOFFSET - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEWIDTH / 2;
            }
            if (event.offsetY - level.y - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2 < 0) {
                levelGraphNode.y = 0;
            }
            else {
                levelGraphNode.y = event.offsetY - level.y - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2;
            }
            if (this.typeCurrentDragData === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT || this.typeCurrentDragData === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPEFRAGMENT) {
                if (level.depth > __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LOWESTABSTRACTIONLEVEL) {
                    if (this.typeCurrentDragData === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT) {
                        levelGraphNode.levelGraphNodeType = __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT;
                    }
                    else {
                        levelGraphNode.levelGraphNodeType = __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPEFRAGMENT;
                    }
                    levelGraphNode.name = 'Unnamed';
                    this.createLevelGraphNode(levelGraphNode);
                }
                else {
                    //          this.flashMessage.message = 'Fragment Nodes cannot be added to level ' + Constants.LOWESTABSTRACTIONLEVEL + ' of a level graph!';
                    //          this.flashMessage.isSuccess = false;
                    //          this.flashMessage.isError = true;
                    //          this.flashMessageService.display(this.flashMessage);
                }
            }
            else {
                levelGraphNode.name = this.currentDragData.name;
                for (var _i = 0, _a = this.currentDragData.providedProperties; _i < _a.length; _i++) {
                    var property = _a[_i];
                    var tempProperty = new __WEBPACK_IMPORTED_MODULE_10__shared_datamodels_metrics_providedproperty__["a" /* ProvidedProperty */](property.name, property.value);
                    levelGraphNode.providedProperties.push(tempProperty);
                }
                levelGraphNode.levelGraphNodeType = this.typeCurrentDragData;
                levelGraphNode.levelGraphNodeTypeId = this.currentDragData.id;
                levelGraphNode.icon = this.currentDragData.icon;
                this.createLevelGraphNode(levelGraphNode);
            }
            this.drag = false;
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - ChangeLevelHeight Event Handling
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - startChangeLevelHeight - Start the level change height event
     *
     * @param - event: MouseEvent - Event Object of the onMouseDown Event
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.startChangeLevelHeight = function (event) {
        this.changeLevelHeight = true;
        this.lastMousePositionY = event.offsetY;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - changeLevelHeight - Change level height of the level draw area
     *
     * @param - event: MouseEvent - Event Object of the onMouseMove Event
     * @param - level: Level - Level witch should be changed
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onChangeLevelHeight = function (event, level) {
        var newMousePositionY = event.offsetY;
        var delta = (newMousePositionY - this.lastMousePositionY);
        if (this.changeLevelHeight && (level.height + delta) >= 0) {
            level.height = (level.height + delta);
            for (var _i = 0, _a = this.currentLevelGraph.levels; _i < _a.length; _i++) {
                var tempLevel = _a[_i];
                if (level.id === tempLevel.id) {
                    tempLevel.height = (level.height);
                }
            }
            for (var _b = 0, _c = this.currentLevelGraph.levelGraphRelations; _b < _c.length; _b++) {
                var relation = _c[_b];
                if (relation.levelGraphRelationType === 'REFINE_TO') {
                    if (relation.sourceLevelDepth > level.depth) {
                        relation.path.points[0].y = relation.path.points[0].y + delta;
                    }
                    if (relation.targetLevelDepth > level.depth) {
                        relation.path.points[1].y = relation.path.points[1].y + delta;
                    }
                    var tempPath = new __WEBPACK_IMPORTED_MODULE_11__shared_datamodels_utility_path__["a" /* Path */](relation.path.points);
                    relation.path = tempPath;
                }
            }
            for (var _d = 0, _e = this.currentLevelGraph.levels; _d < _e.length; _d++) {
                var tempLevel = _e[_d];
                if (tempLevel.visible && tempLevel.depth > level.depth) {
                    tempLevel.y = tempLevel.y + delta;
                }
            }
        }
        this.lastMousePositionY = newMousePositionY;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - stopChangeLevelHeight - Stop the level change height event and update the level graph data
     *
     * @param - event: MouseEvent - Event Object of the onMouseUp Event
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.stopChangeLevelHeight = function (event) {
        this.changeLevelHeight = false;
        this.lastMousePositionY = event.offsetY;
        this.updateLevelGraph();
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Filter/Show Methods for show and hide data
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - onShowLevel - Show a Level if it is currently invisible or hide a Level if it is currently visible
     *
     * @param -level:Level - Level which should be displayed or hide from the draw area
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onShowLevel = function (level) {
        if (level.visible) {
            level.visible = false;
            for (var _i = 0, _a = this.currentLevelGraph.levels; _i < _a.length; _i++) {
                var templevel = _a[_i];
                if (templevel.visible && templevel.depth > level.depth) {
                    templevel.y = templevel.y - level.height - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LEVELGAPOFFSET;
                }
            }
        }
        else {
            level.visible = true;
            for (var _b = 0, _c = this.currentLevelGraph.levels; _b < _c.length; _b++) {
                var templevel = _c[_b];
                if (templevel.visible && (templevel.depth + 1) === level.depth) {
                    level.y = templevel.y + templevel.height + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LEVELGAPOFFSET;
                }
                else if (templevel.depth > level.depth) {
                    templevel.y = templevel.y + level.height + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LEVELGAPOFFSET;
                }
            }
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - showRefineToRelation - Show or hide the refienToRelations if the level height is changed and overlay a level
     *
     * @param - levelGraphRelation: LevelGraphRelation - Checks if a RefineTo Relation should be displayed or not accorrding to the level
     *                                                   height of all level areas
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.showRefineToRelation = function (levelGraphRelation) {
        for (var _i = 0, _a = this.currentLevelGraph.levels; _i < _a.length; _i++) {
            var level = _a[_i];
            if (!level.visible) {
                if (levelGraphRelation.sourceLevelDepth === level.depth || levelGraphRelation.targetLevelDepth === level.depth) {
                    return false;
                }
            }
            else {
                if (levelGraphRelation.sourceLevelDepth < level.depth) {
                    if (levelGraphRelation.path.points[0].y + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LEVELGAPOFFSET * (level.depth - 1) >= level.y) {
                        return false;
                    }
                }
                if (levelGraphRelation.targetLevelDepth < level.depth) {
                    if (levelGraphRelation.path.points[1].y >= level.y) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Check Methods
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - isRelationExist - checks if a directed relation exist between to nodes
     *
     * @param - sourceNode: LevelGraphNode - Source node of the relation
     * @param - targetNode: LevelGraphNode - Target node of the relation
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.isRelationExist = function (sourceNode, targetNode) {
        for (var _i = 0, _a = targetNode.inLevelGraphRelations; _i < _a.length; _i++) {
            var targetRelation = _a[_i];
            for (var _b = 0, _c = sourceNode.outLevelGraphRelations; _b < _c.length; _b++) {
                var sourceRelation = _c[_b];
                if (targetRelation.id === sourceRelation.id) {
                    //          this.flashMessage.message = 'There already exist a relation between this nodes!';
                    //          this.flashMessage.isSuccess = false;
                    //          this.flashMessage.isError = true;
                    //          this.flashMessageService.display(this.flashMessage);
                    return true;
                }
            }
        }
        return false;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - isConnectedToRelationDrawAllowed - check if a draw of a connectedTo relation is allowed
     *
     * @param - sourceNode: LevelGraphNode - Source node of the relation
     * @param - targetNode: LevelGraphNode - Target node of the relation
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.isConnectedToRelationDrawAllowed = function (sourceNode, targetNode) {
        if (this.currentLevelGraphRelation.isTargetNodeSourceNodeInSameLevel()) {
            if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE) {
                return true;
            }
            else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE) {
                return true;
            }
            else {
                //        this.flashMessage.message = 'ConnectedTo relation can only been draw between a Level Graph Node of Type RelationshipType and Level Graph Node of Type NodeType!';
                //        this.flashMessage.isSuccess = false;
                //        this.flashMessage.isError = true;
                //        this.flashMessageService.display(this.flashMessage);
                return false;
            }
        }
        else {
            //      this.flashMessage.message = 'ConnectedTo relations can only been drawn between two nodes in the same Level!';
            //      this.flashMessage.isSuccess = false;
            //      this.flashMessage.isError = true;
            //      this.flashMessageService.display(this.flashMessage);
            return false;
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - isRefineToRelationDrawAllowed - check if a draw of a refineTo to relation is allowed
     *
     * @param - sourceNode: LevelGraphNode - Source node of the relation
     * @param - targetNode: LevelGraphNode - Target node of the relation
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.isRefineToRelationDrawAllowed = function (sourceNode, targetNode, targetLevel) {
        if (this.currentLevelGraphRelation.sourceLevelDepth < targetLevel.depth) {
            if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE) {
                return true;
            }
            else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE) {
                return true;
            }
            else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPEFRAGMENT) {
                return true;
            }
            else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT) {
                return true;
            }
            else {
                //        this.flashMessage.message = 'Refine To relations can only be drawn between to nodes of same type in different levels or between a node and a node of type fragment!';
                //        this.flashMessage.isSuccess = false;
                //        this.flashMessage.isError = true;
                //        this.flashMessageService.display(this.flashMessage);
                return false;
            }
        }
        else {
            if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE) {
                return true;
            }
            else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE) {
                return true;
            }
            else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE) {
                return true;
            }
            else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE) {
                return true;
            }
            else {
                //        this.flashMessage.message = 'RefineTo relations can only been drawn between nodes in the same level from a level graph node of type fragment to a  level graph node of type relationship or nodetype.';
                //        this.flashMessage.isSuccess = false;
                //        this.flashMessage.isError = true;
                //        this.flashMessageService.display(this.flashMessage);
            }
            return false;
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Small Helper Methods like change, select, view, add methods
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - addLevel - Add a new Level to the level graph
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.addLevel = function () {
        var _this = this;
        var y = 0;
        for (var _i = 0, _a = this.currentLevelGraph.levels; _i < _a.length; _i++) {
            var level = _a[_i];
            if (level.visible) {
                y = y + level.height + __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].LEVELGAPOFFSET;
            }
        }
        var tempLevel = new __WEBPACK_IMPORTED_MODULE_5__shared_datamodels_levelgraph_level__["a" /* Level */](this.currentLevelGraph.levels.length, y, this.currentLevelGraph.id);
        tempLevel.levelGraph = this.currentLevelGraph;
        this.levelService.createLevel(tempLevel)
            .subscribe(function (levelResponse) {
            _this.currentLevelGraph.levels.push(levelResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level with id: ' + levelResponse.id + ' was created sucessfully.', LevelGraphModellerComponent_1.name);
        }, function (error) {
            //        this.flashMessage.message = error;
            //        this.flashMessage.isSuccess = false;
            //        this.flashMessage.isError = true;
            //        this.flashMessageService.display(this.flashMessage);
        });
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - removeLevel - Remove a level from the level graph
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.removeLevel = function () {
        var _this = this;
        if (this.currentLevelGraph.levels.length > 2) {
            this.levelService.deleteLevel(this.currentLevelGraph.levels[this.currentLevelGraph.levels.length - 1].id)
                .subscribe(function (response) {
                _this.currentLevelGraph.removeLevel(_this.currentLevelGraph.levels[_this.currentLevelGraph.levels.length - 1].id);
                __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level with id: ' + _this.currentLevelGraph.levels[_this.currentLevelGraph.levels.length - 1].id + ' was deleted sucessfully.', LevelGraphModellerComponent_1.name);
            }, function (error) {
                //          this.flashMessage.message = error;
                //          this.flashMessage.isSuccess = false;
                //          this.flashMessage.isError = true;
                //          this.flashMessageService.display(this.flashMessage);
            });
        }
        else {
            //      this.flashMessage.message = 'A Level Graph must have at least 2 levels.';
            //      this.flashMessage.isSuccess = false;
            //      this.flashMessage.isError = true;
            //      this.flashMessageService.display(this.flashMessage);
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - stopAllEvents is called onMouseUpEvent on the draw area to set all flags to false for safety reasons
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.stopAllEvents = function () {
        this.drawRelation = false;
        this.changeLevelHeight = false;
        this.moveNode = false;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - onSelectedRepository - Set the data of the current selectedRepository
     *
     * @param - repository: Repository - Repository which is selected
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.onSelectRepository = function (repository) {
        this.selectedRepository = repository;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - changeTool change the selected tool for model a level graph
     *
     *  @param - tool: any - Tool which is selected
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.changeTool = function (tool) {
        for (var _i = 0, _a = this.toolList; _i < _a.length; _i++) {
            var t = _a[_i];
            t.checked = false;
        }
        tool.checked = true;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - setEntity - Set Entity to which a expected or provided property should be added
     *
     *  @param - entity: any - Entity which should be set
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.setEntity = function (entity) {
        this.entity = entity;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - addProvidedProperty - Add a ProvidedProperty to the current set entity
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.addProvidedProperty = function () {
        var _this = this;
        this.createdProvidedProperty.entityProvided = this.entity;
        this.createdProvidedProperty.entityProvidedId = this.entity.id;
        this.providedPropertyService.createProvidedProperty(this.createdProvidedProperty).subscribe(function (providedPropertyResponse) { return _this.entity.providedProperties.push(providedPropertyResponse); });
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - addExpectedProperty - Add a ExpectedProperty to the current set entity
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.addExpectedProperty = function () {
        var _this = this;
        this.createdExpectedProperty.entityExpected = this.entity;
        this.createdExpectedProperty.entityExpectedId = this.entity.id;
        this.expectedPropertySerivce.createExpectedProperty(this.createdExpectedProperty).subscribe(function (expectedPropertyResponse) { return _this.entity.expectedProperties.push(expectedPropertyResponse); });
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - addExpectedProperty - Add a ExpectedProperty to the current set entity
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.setEntryExitProperty = function () {
        this.currentLevelGraphRelation.exitPoint = this.exitPoint;
        this.currentLevelGraphRelation.entryPoint = this.entryPoint;
        this.updateLevelGraph();
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - isEntryExitRelation - Set the entry and exit property of a refineTo relation
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.isEntryExitRelation = function (relation) {
        var sourceNode;
        var targetNode;
        for (var _i = 0, _a = this.currentLevelGraph.levelGraphNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (relation.sourceNodeId === node.id) {
                sourceNode = node;
            }
            if (relation.targetNodeId === node.id) {
                targetNode = node;
            }
        }
        if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE) {
            return true;
        }
        else if (sourceNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPEFRAGMENT && targetNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE) {
            return true;
        }
        else {
            return false;
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     *  @method - setLevelGraphRelation - Set current selected relation and the values of the entry and exit point of the relation
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphModellerComponent.prototype.setLevelGraphRelation = function (relation) {
        this.currentLevelGraphRelation = relation;
        this.entryPoint = relation.entryPoint;
        this.exitPoint = relation.exitPoint;
    };
    LevelGraphModellerComponent.prototype.setLevelGraphNode = function (levelGraphNode) {
        this.currentLevelGraphNode = levelGraphNode;
    };
    LevelGraphModellerComponent.prototype.editLevelGraphNodeName = function (name) {
        this.currentLevelGraphNode.name = name;
        this.currentLevelGraph.levelGraphNodes = __WEBPACK_IMPORTED_MODULE_21__utility__["a" /* Utility */].updateElementInArry(this.currentLevelGraphNode, this.currentLevelGraph.levelGraphNodes);
        this.updateLevelGraph();
    };
    return LevelGraphModellerComponent;
}());
LevelGraphModellerComponent = LevelGraphModellerComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__angular_core__["Component"])({
        selector: 'app-levelgraphmodeller',
        template: __webpack_require__(749),
        styles: [__webpack_require__(682)]
    })
    /*********************************************************************************************************************************************************************************************************
     *
     * @component - LevelGraphModellerComponent for model a LevelGraph for the refinement of topologies
     *
     * @field - currentDragData: any - Container for storing the data which are moved from the tool box to the draw area and should be created
     * @field - typeCurrentDragData: string - Type of the current drag data
     *
     * @field - repositories: Repository[] - All available repositories in the database
     * @field - selectedRepository: Repository - Currently selected repository
     *
     * @field - entity: Entity - Current selected Entity for add new expected or provided properties
     * @field - createdProvidedProperty: ProvidedProperty - Provided property which should be added
     * @field - createdExpectedProperty: ExpectedProperty - Expected property which should be added
     *
     * @field - currentLevelGraph: LevelGraph - Current LevelGraph which is displayed in the LevelGraphModeller
     * @field - currentLevelGraphNode: LevelGraphNode - Current LevelGraphNode which should be created or moved in the level
     * @field - currentLevelGraphRelation: LevelGraphRelation - Current LevelGraphRelation which should be drawn and created
     *
     * @field - lastMousePositionY: number - Last known x position of the mouse. Needed to calculate the delta of a mouse move event
     * @field - lastMousePositionX: number - Last known y position of the mouse. Needed to calculate the delta of a mouse move event
     *
     * @field - drag: boolean - True if drag and drop event is enabled else false
     * @field - drawRelation: boolean - True if you currently draw a relation else false
     *
     * @field - moveNode: boolean - True if you currently move a node around in the level area
     * @field - changeLevelHeight: boolean - True if you currently change the height of the level area
     *
     * @field - toolList: [] -  The Relation Types of a levelGraph currently implemented as fixed array but you may decide to transform
     *                          this types into class if the have specific attributes which are different from each other
     * @field - levelGraphRelationTypes: [] -The Relation Types of a levelGraph currently implemented as constants Types but you may decide
     *                                       to transform this types into class if the have specific attributes which are different from each other
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may
     *                                       cause a "Over-Flashing" for the user experience
     *
     ********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_23__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_23__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_23__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_23__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_repository_repository_service__["a" /* RepositoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_repository_repository_service__["a" /* RepositoryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_levelgraph_levelgraphnode_service__["a" /* LevelGraphNodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_levelgraph_levelgraphnode_service__["a" /* LevelGraphNodeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_levelgraph_level_service__["a" /* LevelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_levelgraph_level_service__["a" /* LevelService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_levelgraph_levelgraphrelation_service__["a" /* LevelGraphRelationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_levelgraph_levelgraphrelation_service__["a" /* LevelGraphRelationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_metrics_providedpropertyservice_service__["a" /* ProvidedPropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_metrics_providedpropertyservice_service__["a" /* ProvidedPropertyService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_metrics_expectedproperty_service__["a" /* ExpectedPropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_metrics_expectedproperty_service__["a" /* ExpectedPropertyService */]) === "function" && _j || Object])
], LevelGraphModellerComponent);

var LevelGraphModellerComponent_1, _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=levelgraphmodeller.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LevelGraphToolComponent = LevelGraphToolComponent_1 = (function () {
    function LevelGraphToolComponent(levelGraphService) {
        this.levelGraphService = levelGraphService;
        this.levelGraphs = [];
    }
    ;
    LevelGraphToolComponent.prototype.ngOnInit = function () {
        this.retrieveLevelGraphs();
    };
    /********************************************************************************************************************************************************************************************************
    *
    * @method - retrieveLevelGraphs - Call the LevelGraphService for loading all LevelGraphs from database into the application and subscribe
    *                                 for a callback. Currently no pagination/streaming of data is supported
    *
    *******************************************************************************************************************************************************************************************************/
    LevelGraphToolComponent.prototype.retrieveLevelGraphs = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraph Data', LevelGraphToolComponent_1.name);
        this.levelGraphService.getLevelGraphs()
            .subscribe(function (levelGraphsResponse) {
            _this.levelGraphs = levelGraphsResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graphs sucessfully retrieved.', LevelGraphToolComponent_1.name);
        });
    };
    return LevelGraphToolComponent;
}());
LevelGraphToolComponent = LevelGraphToolComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-levelgraphtool',
        template: __webpack_require__(750),
        styles: [__webpack_require__(683)]
    })
    /*******************************************************************************************************************
     *
     * @component - LevelGraphToolComponent as wrapper component for the LevelGraphComponent so that you can extend the
     *              tool component flexible with other components
     *
     * @author - Arthur Kaul
     *
     ******************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */]) === "function" && _a || Object])
], LevelGraphToolComponent);

var LevelGraphToolComponent_1, _a;
//# sourceMappingURL=levelgraphtool.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_datamodels_entity_entity__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_datamodels_levelgraph_levelgraph__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_datamodels_metrics_expectedproperty__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_datamodels_metrics_providedproperty__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_datamodels_repository_repository__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_datamodels_topology_nodetemplate__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_datamodels_topology_relationshiptemplate__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_datamodels_topology_topologytemplate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_datamodels_utility_path__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_dataservices_levelgraph_level_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_levelgraph_levelgraphnode_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_metrics_expectedproperty_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_metrics_providedpropertyservice_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_refinement_refinement_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_repository_repository_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_topologytemplate_nodetemplate_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_dataservices_types_nodetype_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_dataservices_topologytemplate_relationshiptemplate_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_dataservices_types_relationshiptype_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_dataservices_topologytemplate_topologytemplate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyModellerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var TopologyModellerComponent = TopologyModellerComponent_1 = (function () {
    function TopologyModellerComponent(repositoryService, levelGraphNodeService, levelService, flashMessageService, route, router, topologyTemplateService, nodeTypeService, relationshipTypeService, levelGraphService, nodeTemplateService, providedPropertyService, expectedPropertyService, relationshipTemplateService, refinementService) {
        this.repositoryService = repositoryService;
        this.levelGraphNodeService = levelGraphNodeService;
        this.levelService = levelService;
        this.flashMessageService = flashMessageService;
        this.route = route;
        this.router = router;
        this.topologyTemplateService = topologyTemplateService;
        this.nodeTypeService = nodeTypeService;
        this.relationshipTypeService = relationshipTypeService;
        this.levelGraphService = levelGraphService;
        this.nodeTemplateService = nodeTemplateService;
        this.providedPropertyService = providedPropertyService;
        this.expectedPropertyService = expectedPropertyService;
        this.relationshipTemplateService = relationshipTemplateService;
        this.refinementService = refinementService;
        this.currentTopologyTemplate = new __WEBPACK_IMPORTED_MODULE_10__shared_datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
        this.currentTopologyTemplates = [];
        this.currentNodeTemplate = new __WEBPACK_IMPORTED_MODULE_8__shared_datamodels_topology_nodetemplate__["a" /* NodeTemplate */]();
        this.currentRelationshipTemplate = new __WEBPACK_IMPORTED_MODULE_9__shared_datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */](0, 0, null, 0, 0);
        this.levelGraphs = [];
        this.selectedLevelGraph = new __WEBPACK_IMPORTED_MODULE_4__shared_datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
        this.selectedLevelGraphNodeNodeType = [];
        this.selectedLevelGraphNodeNodeTypeCurrentAbstractionLevel = [];
        this.selectedLevelGraphNodeRelationType = [];
        this.selectedLevelGraphNodeRelationTypeCurrentAbstractionLevel = [];
        this.repositories = [];
        this.selectedRepository = new __WEBPACK_IMPORTED_MODULE_7__shared_datamodels_repository_repository__["a" /* Repository */]();
        this.currentAbstractionLevel = 0;
        this.lastMousePositionY = 0;
        this.lastMousePositionX = 0;
        this.dragNodeType = false;
        this.dragLevelGraphNode = false;
        this.moveNode = false;
        this.drawRelation = false;
        this.drawCurrentLevelGraphRelation = false;
        this.drawCurrentLevelGraphCompliantRelation = false;
        this.currentLevelGraphCompliantRelationshipTypes = [];
        this.entity = new __WEBPACK_IMPORTED_MODULE_3__shared_datamodels_entity_entity__["a" /* Entity */]();
        this.createProvidedProperty = new __WEBPACK_IMPORTED_MODULE_6__shared_datamodels_metrics_providedproperty__["a" /* ProvidedProperty */]('Unnamed', 'Undefined');
        this.createExpectedProperty = new __WEBPACK_IMPORTED_MODULE_5__shared_datamodels_metrics_expectedproperty__["a" /* ExpectedProperty */]('Unnamed', 'Undefined');
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_28_angular2_flash_message__["FlashMessage"]();
    }
    /*****************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Initialize TopologyModellerComponent', TopologyModellerComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentTopologyTemplate.id = params['id'] || '';
        });
        this.flashMessage.timeoutInMS = __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].FLASHMESSAGETIMEOUT;
        this.retrieveTopologyTemplate(this.currentTopologyTemplate.id);
        this.retrieveRepositories();
        this.retrieveLevelGraphs();
        this.selectedRepository.name = 'Select Repository';
        this.selectedLevelGraph.name = 'Select Level Graph';
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Retrieve Methods
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - retrieveTopologyTemplate - Call the TopologyTemplateService for loading a TopologyTemplate from database into the application
     *                                      and subscribe for a callback.
     *
     * @param - id: number - Number of TopologyTemplate which should be loaded from the database
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.retrieveTopologyTemplate = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve TopologyTemplate Data', TopologyModellerComponent_1.name);
        this.topologyTemplateService.getTopologyTemplate(id)
            .subscribe(function (topologyTemplateResponse) {
            _this.currentTopologyTemplate = topologyTemplateResponse;
            _this.currentAbstractionLevel = topologyTemplateResponse.abstractionLevel;
            _this.currentTopologyTemplates.push(topologyTemplateResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Topology Template with id: ' + topologyTemplateResponse.id + ' and name: ' + topologyTemplateResponse.name + 'was retrieved sucessfully.', TopologyModellerComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /*****************************************************************************************************************************************
     *
     * @method - retrieveRepositories - Call the RepositoryService for loading a Repository from database into the application
     *                                  and subscribe for a callback.
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.retrieveRepositories = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve Repositories Data', TopologyModellerComponent_1.name);
        this.repositoryService.getRepositories()
            .subscribe(function (repositoriesResponse) {
            _this.repositories = repositoriesResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repositories retrieved sucessfully.', TopologyModellerComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /*****************************************************************************************************************************************
     *
     * @method - retrieveLevelGraphs - Call the LevelGraphService for loading all LevelGraphs from database into the application and subscribe
     *                                 for a callback. Currently no pagination/streaming of data is supported
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.retrieveLevelGraphs = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraphs Data', TopologyModellerComponent_1.name);
        this.levelGraphService.getLevelGraphs().subscribe(function (levelGraphsResponse) {
            _this.levelGraphs = levelGraphsResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('LevelGraphs were retrieved sucessfully', TopologyModellerComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Update Methods
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - updateTopologyTemplate - Call the TopologyTemplateService Update Method for updating the current TopologyTemplate
     *                                    in the database and subscribe for a callback
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.updateTopologyTemplate = function () {
        var _this = this;
        this.topologyTemplateService.updateTopologyTemplate(this.currentTopologyTemplate)
            .subscribe(function (topologyTemplateResponse) {
            //        this.currentTopologyTemplate = topologyTemplateResponse;
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isSuccess = false;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Create Methods
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - createNodeTemplate - Call the NodeTemplateService for creating a new NodeTemplate in the database
     *                                and subscribe for a callback
     *
     * @param - nodeTemplate: NodeTemplate - NodeTemplate which should be stored in the database
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.createNodeTemplate = function (nodeTemplate) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create NodeTemplate', TopologyModellerComponent_1.name);
        this.nodeTemplateService.createNodeTemplate(nodeTemplate)
            .subscribe(function (nodeTemplateResponse) {
            _this.currentTopologyTemplate.nodeTemplates.push(nodeTemplateResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Node Template was sucessfully created with id: ' + nodeTemplateResponse.id, TopologyModellerComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /*****************************************************************************************************************************************
     *
     * @method - createLevelGraphRelation - Call the RelationshipTemplateService for creating a new RelationshipTemplate in the database
     *                                      and subscribe for a callback
     *
     * @param - relationshipTemplate: RelationshipTemplate - RelationshipTemplate which should be stored in the database
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.createRelationshipTemplate = function (relationshipTemplate) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create RelationshipTemplate', TopologyModellerComponent_1.name);
        this.relationshipTemplateService.createRelationshipTemplate(relationshipTemplate).subscribe(function (relationshipTemplateResponse) {
            _this.currentTopologyTemplate.relationshipTemplates.push(relationshipTemplateResponse);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isSuccess = false;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Delete Methods
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - deleteNodeTemplate - Call the NodeTemplateService for delete a NodeTemplate from the database and subscribe for a callback.
     *
     * @param - id: number - ID of the NodeTemplate witch should be deleted from the database
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.deleteNodeTemplate = function (nodeTemplate) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete NodeTemplate', TopologyModellerComponent_1.name);
        this.nodeTemplateService.deleteNodeTemplate(nodeTemplate.id).subscribe(function (nodeTemplateResponse) {
            // this.topologyTemplateService.getTopologyTemplate(this.currentTopologyTemplate.id).subscribe(topologyTemplateResponse => this.currentTopologyTemplate = topologyTemplateResponse);
            for (var _i = 0, _a = _this.currentTopologyTemplate.relationshipTemplates; _i < _a.length; _i++) {
                var relationshipTemplate = _a[_i];
                if (relationshipTemplate.sourceNodeId === nodeTemplate.id) {
                    for (var _b = 0, _c = _this.currentTopologyTemplate.nodeTemplates; _b < _c.length; _b++) {
                        var node = _c[_b];
                        if (node.id === relationshipTemplate.targetNodeId) {
                            node.inRelationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(relationshipTemplate.id, node.inRelationshipTemplates);
                        }
                    }
                    _this.currentTopologyTemplate.relationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(relationshipTemplate.id, _this.currentTopologyTemplate.relationshipTemplates);
                }
                if (relationshipTemplate.targetNodeId === nodeTemplate.id) {
                    for (var _d = 0, _e = _this.currentTopologyTemplate.nodeTemplates; _d < _e.length; _d++) {
                        var node = _e[_d];
                        if (node.id === relationshipTemplate.sourceNodeId) {
                            node.outRelationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(relationshipTemplate.id, node.outRelationshipTemplates);
                        }
                    }
                    _this.currentTopologyTemplate.relationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(relationshipTemplate.id, _this.currentTopologyTemplate.relationshipTemplates);
                }
            }
            _this.currentTopologyTemplate.nodeTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(nodeTemplate.id, _this.currentTopologyTemplate.nodeTemplates);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Node Template with id: ' + nodeTemplate.id + ' was deleted sucessfully.', TopologyModellerComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isSuccess = false;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /*****************************************************************************************************************************************
     *
     * @method - deleteRelationshipTemplate - Call the RelationshipTemplateService for delete a NodeTemplate from the database and subscribe for
     *                                      a callback.
     *
     * @param - id: number - ID of the RelationshipTemplate witch should be deleted from the database
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.deleteRelationshipTemplate = function (relationshipTemplate) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete RelationshipTemplate', TopologyModellerComponent_1.name);
        this.relationshipTemplateService.deleteRelationshipTemplate(relationshipTemplate.id)
            .subscribe(function (relationshipTemplateResponse) {
            for (var _i = 0, _a = _this.currentTopologyTemplate.nodeTemplates; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.id === relationshipTemplate.sourceNodeId) {
                    node.outRelationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(relationshipTemplate.id, node.outRelationshipTemplates);
                }
                if (node.id === relationshipTemplate.targetNodeId) {
                    node.inRelationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(relationshipTemplate.id, node.inRelationshipTemplates);
                }
            }
            _this.currentTopologyTemplate.relationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].deleteElementFromArry(relationshipTemplate.id, _this.currentTopologyTemplate.relationshipTemplates);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Relationship Template with  id: ' + relationshipTemplateResponse.id + ' was deleted sucessfully.', TopologyModellerComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isSuccess = false;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Drag and Drop Event Handling
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - onDragNodeType - Is called to start drag and drop of NodeTypes from tool box to the draw area
     *
     * @param - event: Event - Event Object of the onDrag Event
     * @param - dragData: any - NodeType data which will be dragged from the tool box to the draw area to create a NodeTemplate of this type
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onDragNodeType = function (event, dragData) {
        if (!this.dragNodeType) {
            this.currentDragData = dragData;
            this.dragNodeType = true;
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method - onDragLevelGraphNode - Is called to start drag and drop of level graph nodes from tool box to the draw area
     *
     * @param - event: Event - Event Object of the onDrag Event
     * @param - dragData: any - LevelGraphNode data which will be dragged from the tool box to the draw area to create a NodeTemplate of this
     *                          type
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onDragLevelGraphNode = function (event, dragData) {
        if (!this.dragLevelGraphNode) {
            this.currentDragData = dragData;
            this.dragLevelGraphNode = true;
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method - onDragOver is called to allow a drag over between different div containers
     *
     * @param - event: Event - Event Object of the onDragOver Event
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    /*****************************************************************************************************************************************
     *
     * @method - onDrop is called to create a NodeTemplate in the drawArea
     *
     * @param - event: Event - Event Object of the onDrop Event
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onDrop = function (event) {
        var _this = this;
        if (this.dragNodeType || this.dragLevelGraphNode) {
            var tempNodeTemplate_1 = new __WEBPACK_IMPORTED_MODULE_8__shared_datamodels_topology_nodetemplate__["a" /* NodeTemplate */]();
            tempNodeTemplate_1.x = event.offsetX - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEWIDTH / 2;
            tempNodeTemplate_1.y = event.offsetY - __WEBPACK_IMPORTED_MODULE_1__shared_constants_constants__["a" /* Constants */].NODEHEIGHT / 2;
            tempNodeTemplate_1.name = this.currentDragData.name;
            tempNodeTemplate_1.icon = this.currentDragData.icon;
            tempNodeTemplate_1.topologyTemplateId = this.currentTopologyTemplate.id;
            tempNodeTemplate_1.topologyTemplate = this.currentTopologyTemplate;
            tempNodeTemplate_1.abstractionLevel = this.currentTopologyTemplate.id;
            for (var _i = 0, _a = this.currentDragData.providedProperties; _i < _a.length; _i++) {
                var property = _a[_i];
                var tempProperty = new __WEBPACK_IMPORTED_MODULE_6__shared_datamodels_metrics_providedproperty__["a" /* ProvidedProperty */](property.name, property.value);
                tempNodeTemplate_1.providedProperties.push(tempProperty);
            }
            if (this.dragNodeType) {
                tempNodeTemplate_1.nodeTypeId = this.currentDragData.id;
                tempNodeTemplate_1.nodeType = this.currentDragData;
                this.createNodeTemplate(tempNodeTemplate_1);
            }
            else {
                this.nodeTypeService.getNodeType(this.currentDragData.levelGraphNodeTypeId).subscribe(function (nodeTypeResponse) {
                    tempNodeTemplate_1.nodeTypeId = _this.currentDragData.levelGraphNodeTypeId;
                    tempNodeTemplate_1.nodeType = nodeTypeResponse;
                    tempNodeTemplate_1.levelGraphNode = _this.currentDragData;
                    tempNodeTemplate_1.levelGraphNodeId = _this.currentDragData.id;
                    _this.createNodeTemplate(tempNodeTemplate_1);
                });
            }
            this.dragNodeType = false;
            this.dragLevelGraphNode = false;
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Move Node Event Handling
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - startMoveNode - Start moving a node in drawArea
     *
     * @param - event: MouseEvent - Event Object of the onMouseDown Event
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.startMoveNode = function (event, nodeTemplate) {
        if (!this.moveNode && !this.drawRelation && !this.drawCurrentLevelGraphCompliantRelation) {
            this.moveNode = true;
            this.lastMousePositionY = event.offsetY;
            this.lastMousePositionX = event.offsetX;
            this.currentNodeTemplate = nodeTemplate;
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method - onMoveNode - Move a node and his in and outgoing edges in the drawArea
     *
     * @param - event: MouseEvent - Event Object of the onMouseMove Event
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onMoveNode = function (event) {
        if (this.moveNode) {
            var newMousePositionY = event.offsetY;
            var newMousePositionX = event.offsetX;
            var deltaY = (newMousePositionY - this.lastMousePositionY);
            var deltaX = (newMousePositionX - this.lastMousePositionX);
            if ((this.currentNodeTemplate.x + deltaX) > 0) {
                this.currentNodeTemplate.x = (this.currentNodeTemplate.x + deltaX);
            }
            if ((this.currentNodeTemplate.y + deltaY) > 0) {
                this.currentNodeTemplate.y = (this.currentNodeTemplate.y + deltaY);
            }
            for (var _i = 0, _a = this.currentTopologyTemplate.relationshipTemplates; _i < _a.length; _i++) {
                var relationshipTemplate = _a[_i];
                if (this.currentNodeTemplate.id === relationshipTemplate.targetNodeId) {
                    if ((relationshipTemplate.path.points[1].x + deltaX) > (0 + this.currentNodeTemplate.width / 2)) {
                        relationshipTemplate.path.points[1].x = relationshipTemplate.path.points[1].x + deltaX;
                    }
                    if ((relationshipTemplate.path.points[1].y + deltaY) > (0 + this.currentNodeTemplate.height / 2)) {
                        relationshipTemplate.path.points[1].y = relationshipTemplate.path.points[1].y + deltaY;
                    }
                }
                if (this.currentNodeTemplate.id === relationshipTemplate.sourceNodeId) {
                    if ((relationshipTemplate.path.points[0].x + deltaX) > (0 + this.currentNodeTemplate.width / 2)) {
                        relationshipTemplate.path.points[0].x = relationshipTemplate.path.points[0].x + deltaX;
                    }
                    if ((relationshipTemplate.path.points[0].y + deltaY) > (0 + this.currentNodeTemplate.height / 2)) {
                        relationshipTemplate.path.points[0].y = relationshipTemplate.path.points[0].y + deltaY;
                    }
                }
                var tempPath = new __WEBPACK_IMPORTED_MODULE_11__shared_datamodels_utility_path__["a" /* Path */](relationshipTemplate.path.points);
                relationshipTemplate.path = tempPath;
            }
            this.lastMousePositionY = newMousePositionY;
            this.lastMousePositionX = newMousePositionX;
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method - stopMoveNode - Stop the moving event of the NodeTemplate and create a new NodeTemplate in the TopologyTemplate
     *
     * @param - event: MouseEvent - Event Object of the onMouseUp Event
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.stopMoveNode = function (event) {
        if (this.moveNode) {
            this.moveNode = false;
            this.lastMousePositionY = event.offsetY;
            this.lastMousePositionX = event.offsetX;
            this.updateTopologyTemplate();
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Refinement Handling
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - startRefinement - Call the RefinementSerive for refine the currentTopologyTemplate and subscribe for a callback.
     *
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.startRefinement = function (smi, steps) {
        var _this = this;
        this.updateTopologyTemplate();
        var levelGraph = this.mergeLevelGraphs();
        var maxLevel = 0;
        for (var _i = 0, _a = levelGraph.levels; _i < _a.length; _i++) {
            var level = _a[_i];
            if (level.depth > maxLevel) {
                maxLevel = level.depth;
            }
        }
        if (maxLevel <= this.currentTopologyTemplate.abstractionLevel) {
            this.flashMessage.message = 'Topology Template can`t be refined with this Level Graphs, because the level of abstraction of the Topology Template is higher or equal to the abstraction levels of the selected Level Graphs';
            this.flashMessage.isSuccess = false;
            this.flashMessage.isError = true;
            this.flashMessageService.display(this.flashMessage);
        }
        else {
            this.flashMessage.message = 'Refinement Startet in Background';
            this.flashMessage.isSuccess = true;
            this.flashMessageService.display(this.flashMessage);
            var startTime_1 = Date.now();
            if (steps === 1) {
                this.refinementService.refineOneStepTopologyTemplate(this.currentTopologyTemplate.id, levelGraph, smi).subscribe(function (topologyTemplateResponse) {
                    _this.currentTopologyTemplate = topologyTemplateResponse;
                    _this.updateTopologyTemplate();
                    var endTime = Date.now();
                    _this.flashMessage.message = 'Refinement Finished successfuly in' + (startTime_1 - endTime);
                    _this.flashMessage.isSuccess = true;
                    _this.flashMessageService.display(_this.flashMessage);
                }, function (error) {
                    _this.updateTopologyTemplate();
                    _this.flashMessage.message = error;
                    _this.flashMessage.isSuccess = false;
                    _this.flashMessage.isError = true;
                    _this.flashMessageService.display(_this.flashMessage);
                });
            }
            else {
                this.refinementService.refineTopologyTemplate(this.currentTopologyTemplate.id, levelGraph, smi).subscribe(function (topologyTemplateResponse) {
                    _this.currentTopologyTemplate = topologyTemplateResponse;
                    _this.updateTopologyTemplate();
                    var endTime = Date.now();
                    _this.flashMessage.message = 'Refinement Finished successfuly in' + (startTime_1 - endTime);
                    _this.flashMessage.isSuccess = true;
                    _this.flashMessageService.display(_this.flashMessage);
                }, function (error) {
                    _this.flashMessage.message = error;
                    _this.flashMessage.isSuccess = false;
                    _this.flashMessage.isError = true;
                    _this.flashMessageService.display(_this.flashMessage);
                });
            }
        }
    };
    /*************************************************************************************************************************************
     *
     * @method - mergeLevelGraph - Merge all data of the selected Level Graphs into one Level Graph which will be used for the refinement
     *
     **************************************************************************************************************************************/
    TopologyModellerComponent.prototype.mergeLevelGraphs = function () {
        var levelGraph = new __WEBPACK_IMPORTED_MODULE_4__shared_datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
        for (var _i = 0, _a = this.levelGraphs; _i < _a.length; _i++) {
            var levelGraphTemp = _a[_i];
            if (levelGraphTemp.checked) {
                levelGraph.levels = levelGraph.levels.concat(levelGraphTemp.levels);
                levelGraph.levelGraphNodes = levelGraph.levelGraphNodes.concat(levelGraphTemp.levelGraphNodes);
                levelGraph.levelGraphRelations = levelGraph.levelGraphRelations.concat(levelGraphTemp.levelGraphRelations);
            }
        }
        return levelGraph;
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Draw Relation Event Handling
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method - startDrawRelation - Start the draw relation event of an independent relationshipTemplate
     *
     * @param - event: MouseEvent - Event Object of the onMouseDown Event
     * @param - relationshipType: RelationshipType - RelationshiptType of the RelationshiptTemplate which should be created
     * @param - sourceNode: NodeTemplate - sourceNode of the RelationshipTemplate
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.startDrawRelation = function (event, relationshipType, sourceNode) {
        if (!this.drawRelation) {
            this.drawRelation = true;
            this.setDrawCurrentLevelGraphRelationValues(event, relationshipType, sourceNode);
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method - startDrawCurrentLevelGraphRelation - Start the draw relation event of a relationshipTemplate which is derived from
     *                                                the level graph
     *
     * @param - event: MouseEvent - Event Object of the onMouseDown Event
     * @param - levelGraphNode: LevelGraphNode - LevelGraphNode of RelationshipType from which the RelationshiptTemplate should be derived
     * @param - sourceNode: NodeTemplate - sourceNode of the RelationshipTemplate
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.startDrawCurrentLevelGraphRelation = function (event, levelGraphNode, sourceNode) {
        if (!this.drawCurrentLevelGraphRelation) {
            this.drawCurrentLevelGraphRelation = true;
            this.setDrawCurrentLevelGraphRelationValues(event, levelGraphNode, sourceNode);
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method startDrawCurrentLevelGraphCompliantRelation - Start the draw relation of a relationshipTemplate which is derived from
     *                                                the level graph and is compliant to the level graph
     *
     * @param event: MouseEvent - Event Object of the onMouseDown Event
     * @param levelGraphNode: LevelGraphNode - LevelGraphNode of the RelationshiptTemplate which should be created
     * @param sourceNode: NodeTemplate - sourceNode of the RelationshipTemplate
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.startDrawCurrentLevelGraphCompliantRelation = function (event, levelGraphNode, sourceNode) {
        if (!this.drawCurrentLevelGraphCompliantRelation) {
            this.drawCurrentLevelGraphCompliantRelation = true;
            this.setDrawCurrentLevelGraphRelationValues(event, levelGraphNode, sourceNode);
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method startDrawCurrentLevelGraphCompliantRelation - Set the data of the relation which should be drawn
     *
     * @param event: MouseEvent - Event Object of the onMouseDown Event
     * @param parentData: any - Level Graph Node or RelationshipType
     * @param sourceNode: NodeTemplate - sourceNode of the RelationshipTemplate
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.setDrawCurrentLevelGraphRelationValues = function (event, parentData, sourceNode) {
        var _this = this;
        this.lastMousePositionY = event.offsetY;
        this.lastMousePositionX = event.offsetX;
        var startPoint;
        var endPoint;
        startPoint = new __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__["a" /* Point */](sourceNode.x + sourceNode.width / 2, sourceNode.y + sourceNode.height / 2);
        endPoint = new __WEBPACK_IMPORTED_MODULE_12__shared_datamodels_utility_point__["a" /* Point */](sourceNode.x + sourceNode.width / 2 - 5, sourceNode.y + sourceNode.height / 2 - 5);
        var tempPoints = [];
        tempPoints.push(startPoint);
        tempPoints.push(endPoint);
        var tempPath = new __WEBPACK_IMPORTED_MODULE_11__shared_datamodels_utility_path__["a" /* Path */](tempPoints);
        if (this.drawCurrentLevelGraphCompliantRelation || this.drawCurrentLevelGraphRelation) {
            this.currentRelationshipTemplate = new __WEBPACK_IMPORTED_MODULE_9__shared_datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */](sourceNode.id, sourceNode.id, tempPath, parentData.levelGraphNodeTypeId, this.currentTopologyTemplate.id);
            this.currentRelationshipTemplate.levelGraphNode = parentData;
            this.currentRelationshipTemplate.levelGraphNodeId = parentData.id;
            this.relationshipTypeService.getRelationshipType(parentData.levelGraphNodeTypeId).subscribe(function (relationshipTypeResponse) {
                _this.currentRelationshipTemplate.relationshipType = relationshipTypeResponse;
            });
        }
        else {
            this.currentRelationshipTemplate = new __WEBPACK_IMPORTED_MODULE_9__shared_datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */](sourceNode.id, sourceNode.id, tempPath, parentData.id, this.currentTopologyTemplate.id);
            this.relationshipTypeService.getRelationshipType(parentData.id).subscribe(function (relationshipTypeResponse) {
                _this.currentRelationshipTemplate.relationshipType = relationshipTypeResponse;
            });
        }
        for (var _i = 0, _a = parentData.providedProperties; _i < _a.length; _i++) {
            var property = _a[_i];
            var tempProperty = new __WEBPACK_IMPORTED_MODULE_6__shared_datamodels_metrics_providedproperty__["a" /* ProvidedProperty */](property.name, property.value);
            this.currentRelationshipTemplate.providedProperties.push(tempProperty);
        }
        this.currentRelationshipTemplate.topologyTemplate = this.currentTopologyTemplate;
        this.currentRelationshipTemplate.topologyTemplateId = this.currentTopologyTemplate.id;
        this.currentRelationshipTemplate.name = parentData.name;
        this.currentRelationshipTemplate.sourceNodeTemplate = sourceNode;
        this.currentRelationshipTemplate.abstractionLevel = this.currentTopologyTemplate.abstractionLevel;
    };
    /*****************************************************************************************************************************************
     *
     * @method - onDrawLevelGraphRelation - Update the end point position of the path of a relation
     *
     * @param - event: MouseEvent - Event Object of the onMouseMove Event
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onDrawLevelGraphRelation = function (event) {
        if (this.drawRelation || this.drawCurrentLevelGraphCompliantRelation || this.drawCurrentLevelGraphRelation) {
            this.currentRelationshipTemplate.path.points[1].x = event.offsetX;
            this.currentRelationshipTemplate.path.points[1].y = event.offsetY;
            this.currentRelationshipTemplate.path.updatePath();
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method - stopDrawRelation - Stop the draw relation event and draw a relation if it is allow to draw it
     *
     * @param - targetNode: NodeTemplate - Target Node of the relation which should be created
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.stopDrawLevelGraphRelation = function (targetNode) {
        if (this.drawRelation || this.drawCurrentLevelGraphRelation || (this.drawCurrentLevelGraphCompliantRelation && this.isRelationLevelGraphCompliant(targetNode))) {
            this.currentRelationshipTemplate.targetNodeId = targetNode.id;
            this.currentRelationshipTemplate.path.points[1].x = targetNode.x + targetNode.width / 2;
            this.currentRelationshipTemplate.path.points[1].y = targetNode.y + targetNode.height / 2;
            this.currentRelationshipTemplate.path.updatePath();
            this.currentRelationshipTemplate.targetNodeTemplate = targetNode;
            if (!this.currentRelationshipTemplate.isSourceNodeEqualTargetNode()) {
                this.createRelationshipTemplate(this.currentRelationshipTemplate);
            }
            else {
                this.flashMessage.message = 'Self-Loops are not allowed in a Topology Template';
                this.flashMessage.isSuccess = false;
                this.flashMessage.isError = true;
                this.flashMessageService.display(this.flashMessage);
            }
        }
        this.drawRelation = false;
        this.drawCurrentLevelGraphCompliantRelation = false;
        this.drawCurrentLevelGraphRelation = false;
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Check Methods
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method isRelationLevelGraphCompliant - Checks if a relation which should be created is compliant to the current selected Level graph
     *
     * @param targetNode: NodeTemplate - Target Node of the relation which should be created
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.isRelationLevelGraphCompliant = function (targetNode) {
        for (var _i = 0, _a = this.currentRelationshipTemplate.levelGraphNode.outLevelGraphRelations; _i < _a.length; _i++) {
            var levelGraphRelation = _a[_i];
            for (var _b = 0, _c = this.selectedLevelGraph.levelGraphNodes; _b < _c.length; _b++) {
                var levelGraphNode = _c[_b];
                if (levelGraphNode.id === levelGraphRelation.targetNodeId && levelGraphNode.levelGraphNodeTypeId === targetNode.nodeTypeId) {
                    return true;
                }
            }
        }
        this.flashMessage.message = 'NodeType of NodeTemplate is not compliant to the RelationshipType of the current draw RelationTemplate';
        this.flashMessage.isSuccess = false;
        this.flashMessage.isError = true;
        this.flashMessageService.display(this.flashMessage);
        return false;
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // @section - Small Helper Methods like change, select, view, add methods
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*****************************************************************************************************************************************
     *
     * @method onSelectedLevelGraph - Set the data of the currently selected LevelGraph and the available LevelGraphNodes
     *
     * @param levelGraph: LevelGraph - LevelGraph which should be set
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onSelectLevelGraph = function (levelGraph) {
        this.selectedLevelGraph = levelGraph;
        this.selectedLevelGraphNodeNodeType = [];
        this.selectedLevelGraphNodeNodeTypeCurrentAbstractionLevel = [];
        this.selectedLevelGraphNodeRelationType = [];
        this.selectedLevelGraphNodeRelationTypeCurrentAbstractionLevel = [];
        for (var _i = 0, _a = this.selectedLevelGraph.levelGraphNodes; _i < _a.length; _i++) {
            var levelGraphNode = _a[_i];
            if (levelGraphNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].NODETYPE) {
                if (levelGraphNode.levelDepth === this.currentTopologyTemplate.abstractionLevel) {
                    this.selectedLevelGraphNodeNodeTypeCurrentAbstractionLevel.push(levelGraphNode);
                }
                this.selectedLevelGraphNodeNodeType.push(levelGraphNode);
            }
            else if (levelGraphNode.levelGraphNodeType === __WEBPACK_IMPORTED_MODULE_2__shared_constants_levelgraphnodetype__["a" /* LevelGraphNodeType */].RELATIONSHIPTYPE) {
                if (levelGraphNode.levelDepth === this.currentTopologyTemplate.abstractionLevel) {
                    this.selectedLevelGraphNodeRelationTypeCurrentAbstractionLevel.push(levelGraphNode);
                }
                this.selectedLevelGraphNodeRelationType.push(levelGraphNode);
            }
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method onSelectRepository - Set the data of the currently selected Repository
     *
     * @param repository: Repository - Repository which should be set
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onSelectRepository = function (repository) {
        this.selectedRepository = repository;
    };
    /*****************************************************************************************************************************************
     *
     * @method stopDrawRelation - Stop the draw relation event and draw a relation if it is allowed to draw it
     *
     * @param event: MouseEvent - Event Object of the onMouseUp Event
     * @param targetNode: LevelGraphNode - Target Node of the relation which should be draw
     * @param targetLevel: Level - Target Level is the level of the target node
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.setCurrentLevelGraphCompliantRelationshipTypes = function (event, levelGraphNodeId) {
        if (event.which === 3) {
            this.currentLevelGraphCompliantRelationshipTypes = [];
            for (var _i = 0, _a = this.selectedLevelGraphNodeRelationTypeCurrentAbstractionLevel; _i < _a.length; _i++) {
                var levelGraphNode = _a[_i];
                for (var _b = 0, _c = levelGraphNode.inLevelGraphRelations; _b < _c.length; _b++) {
                    var levelGraphRelation = _c[_b];
                    if (levelGraphRelation.sourceNodeId === levelGraphNodeId) {
                        this.currentLevelGraphCompliantRelationshipTypes.push(levelGraphNode);
                    }
                }
            }
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method stopAllEvents - Stop all the events
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.stopAllEvents = function () {
        this.dragNodeType = false;
        this.dragLevelGraphNode = false;
        this.moveNode = false;
        this.drawRelation = false;
        this.drawCurrentLevelGraphCompliantRelation = false;
    };
    /*****************************************************************************************************************************************
     *
     * @method loadSpecificTopologyTemplates - Load a specific topologyTemplate of the current displayed topologyTemplate in the modeler
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.loadSpecificTopologyTemplates = function () {
        this.currentTopologyTemplates = this.currentTopologyTemplate.childTopologyTemplates;
        this.currentTopologyTemplate = this.currentTopologyTemplate.childTopologyTemplates[0];
    };
    /*****************************************************************************************************************************************
     *
     * @method loadAbstractTopologyTemplates - Load the abstract topologyTemplate of the current displayed topologyTemplate in the modeler
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.loadAbstractTopologyTemplates = function () {
        var _this = this;
        this.topologyTemplateService.getTopologyTemplate(this.currentTopologyTemplate.parentTopologyTemplateId)
            .subscribe(function (topologyTemplateResponse) {
            _this.currentTopologyTemplate = topologyTemplateResponse;
            if (_this.currentTopologyTemplate.parentTopologyTemplateId !== null) {
                _this.topologyTemplateService.getTopologyTemplate(_this.currentTopologyTemplate.parentTopologyTemplateId)
                    .subscribe(function (parent) {
                    _this.currentTopologyTemplates = parent.childTopologyTemplates;
                    for (var i = 0; i < _this.currentTopologyTemplates.length; i++) {
                        if (_this.currentTopologyTemplates[i].id === _this.currentTopologyTemplate.id) {
                            _this.currentTopologyTemplate = _this.currentTopologyTemplates[i];
                        }
                    }
                }, function (error) {
                    _this.flashMessage.message = error;
                    _this.flashMessage.isError = true;
                    _this.flashMessageService.display(_this.flashMessage);
                });
            }
            else {
                _this.currentTopologyTemplates = [];
                _this.currentTopologyTemplates.push(_this.currentTopologyTemplate);
            }
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /*****************************************************************************************************************************************
     *
     * @method prevTopology - Load the previous topologyTemplate of the current abstraction level in the modeler
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.prevTopology = function () {
        this.currentTopologyTemplate = this.currentTopologyTemplates[this.currentTopologyTemplates.indexOf(this.currentTopologyTemplate) - 1];
    };
    /*****************************************************************************************************************************************
     *
     * @method prevTopology - Load the next topologyTemplate of the current abstraction level in the modeler
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.nextTopology = function () {
        this.currentTopologyTemplate = this.currentTopologyTemplates[this.currentTopologyTemplates.indexOf(this.currentTopologyTemplate) + 1];
    };
    /*****************************************************************************************************************************************
     *
     * @method stopDrawRelation - Stop the draw relation event and draw a relation if it is allowed to draw it
     *
     * @param entity: any - Event Object of the onMouseUp Event
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.setEntity = function (entity) {
        this.entity = entity;
    };
    /*****************************************************************************************************************************************
     *
     * @method addExpectedProperty - Add expected property to a nodeTemplate or a relationshipTemplate
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.addExpectedProperty = function () {
        var _this = this;
        this.createExpectedProperty.entityExpected = this.entity;
        this.createExpectedProperty.entityExpectedId = this.entity.id;
        this.expectedPropertyService.createExpectedProperty(this.createExpectedProperty).subscribe(function (expectedPropertyResponse) { return _this.entity.expectedProperties.push(expectedPropertyResponse); });
    };
    /*****************************************************************************************************************************************
     *
     * @method addProvidedProperty - Stop the draw relation event and draw a relation if it is allowed to draw it
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.addProvidedProperty = function () {
        var _this = this;
        this.createProvidedProperty.entityProvided = this.entity;
        this.createProvidedProperty.entityProvidedId = this.entity.id;
        this.providedPropertyService.createProvidedProperty(this.createProvidedProperty).subscribe(function (providedPropertyResponse) { return _this.entity.providedProperties.push(providedPropertyResponse); });
    };
    /*****************************************************************************************************************************************
     *
     * @method setUsedLevelGraphs - Select the level graph which where used for modeling a topologyTemplate
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.setUsedLevelGraphs = function () {
        for (var _i = 0, _a = this.levelGraphs; _i < _a.length; _i++) {
            var levelGraph = _a[_i];
            levelGraph.checked = false;
        }
        for (var _b = 0, _c = this.levelGraphs; _b < _c.length; _b++) {
            var levelGraph = _c[_b];
            for (var _d = 0, _e = levelGraph.levelGraphNodes; _d < _e.length; _d++) {
                var levelGraphNode = _e[_d];
                for (var _f = 0, _g = this.currentTopologyTemplate.relationshipTemplates; _f < _g.length; _f++) {
                    var relationshipTemplate = _g[_f];
                    if (levelGraphNode.id === relationshipTemplate.levelGraphNodeId) {
                        levelGraph.checked = true;
                    }
                }
                for (var _h = 0, _j = this.currentTopologyTemplate.nodeTemplates; _h < _j.length; _h++) {
                    var nodeTemplate = _j[_h];
                    if (levelGraphNode.id === nodeTemplate.levelGraphNodeId) {
                        levelGraph.checked = true;
                    }
                }
            }
        }
    };
    /*****************************************************************************************************************************************
     *
     * @method onCheckLevelGraph - Select a level Graph for refinement
     *
     ****************************************************************************************************************************************/
    TopologyModellerComponent.prototype.onCheckLevelGraph = function (levelGraph) {
        if (levelGraph.checked) {
            levelGraph.checked = false;
        }
        else {
            levelGraph.checked = true;
        }
    };
    TopologyModellerComponent.prototype.setNodeTemplate = function (nodeTemplate) {
        this.currentNodeTemplate = nodeTemplate;
    };
    TopologyModellerComponent.prototype.editNodeTemplateName = function (name) {
        this.currentNodeTemplate.name = name;
        this.currentTopologyTemplate.nodeTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].updateElementInArry(this.currentNodeTemplate, this.currentTopologyTemplate.nodeTemplates);
        this.updateTopologyTemplate();
    };
    TopologyModellerComponent.prototype.setRelationshipTemplate = function (relationshipTemplate) {
        this.currentRelationshipTemplate = relationshipTemplate;
    };
    TopologyModellerComponent.prototype.editRelationshipTemplateName = function (name) {
        this.currentRelationshipTemplate.name = name;
        this.currentTopologyTemplate.relationshipTemplates = __WEBPACK_IMPORTED_MODULE_27__utility__["a" /* Utility */].updateElementInArry(this.currentRelationshipTemplate, this.currentTopologyTemplate.relationshipTemplates);
        this.updateTopologyTemplate();
    };
    return TopologyModellerComponent;
}());
TopologyModellerComponent = TopologyModellerComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_24__angular_core__["Component"])({
        selector: 'app-topologymodeller',
        template: __webpack_require__(751),
        styles: [__webpack_require__(684)]
    })
    /*****************************************************************************************************************************************************
     *
     * @component - TopologyModellerComponent Class - With this component you can display, model or refine a TopologyTemplate. It implements different retrieve,
     *                                                update, create and delete methods for different data types like NodeTemplates, RelationshipTemplates,
     *                                                TopologyTemplates, etc. Also it implements all Events which are used for model a TopologyTemplate like
     *                                                move a node and draw a relation. And it`s call the refinement algorithm on the server side and subscribe
     *                                                for a response.
     *
     * @field - rootTopologyTemplate: TopologyTemplate - Root TopologyTemplate which have to be modeled by the user
     * @field - currentTopologyTemplate: TopologyTemplate - Current displayed TopologyTemplate in the ModellerComponent
     * @field - currentNodeTemplate: NodeTemplate - NodeTemplate which should be moved with the move tool
     * @field - currentRelationshipTemplate - RelationshipTemplate - RelationshipTemplate which should be draw and created on the draw area with the draw tool
     * @field - levelGraphs: LevelGraph[] - List of all available LevelGraphs in the database
     * @field - selectedLevelGraph: LevelGraph - Current selected levelGraph in the tool box
     * @field - repositories: Repository[] - List of all available repositories in the database
     * @field - selectedRepository: Repository - Current selected repository in the tool box
     * @field - maxAbstractionLevel: number - Maximal number of different abstraction levels of the rootTopology default 2 because a Level Graph has
     *                                        at least two different levels
     * @field - lastMousePositionY: number - Last known x position of the mouse. Needed to calculate the delta of a mouse move event
     * @field - lastMousePositionX: number - Last known y position of the mouse. Needed to calculate the delta of a mouse move event
     * @field - currentDragData: any - Container for storing the data which are moved from the tool box to the draw area and should be created
     * @field - entity: Entity - Current selected Entity for add new expected or provided properties
     * @field - createdProvidedProperty: ProvidedProperty - Provided property which should be added
     * @field - createdExpectedProperty: ExpectedProperty - Expected property which should be added
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may
     *                                       cause a "Over-Flashing" for the user experience
     * @field - dragNodeType: boolean - True if you drag a nodeType from the repository tool box to the draw area
     * @field - dragLevelGraphNode: boolean - True if you drag a levelGraphNode from the level graph tool box to the draw area
     * @field - moveNode: boolean - True if you move a node in the draw area
     * @field - drawRelation: boolean - True if you draw a relationTemplate with a relationType from a repository and not directly from a level graph
     * @field - drawCurrentLevelGraphCompliantRelation: boolean - True if you draw a relationsTemplate with a relationType from a level graph node of a level graph
     * @field - currentLevelGraphCompliantRelationshipTypes: boolean - Collection of the relationshipTypes of a node template witch a compliant to a level graph node
     *
     * @author - Arthur Kaul
     *
     *****************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_repository_repository_service__["a" /* RepositoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_repository_repository_service__["a" /* RepositoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_levelgraph_levelgraphnode_service__["a" /* LevelGraphNodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_levelgraph_levelgraphnode_service__["a" /* LevelGraphNodeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__shared_dataservices_levelgraph_level_service__["a" /* LevelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__shared_dataservices_levelgraph_level_service__["a" /* LevelService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_28_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_28_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_25__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_25__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_25__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_25__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_26__shared_dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_26__shared_dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_21__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_21__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_23__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_23__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_topologytemplate_nodetemplate_service__["a" /* NodeTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_topologytemplate_nodetemplate_service__["a" /* NodeTemplateService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_metrics_providedpropertyservice_service__["a" /* ProvidedPropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_metrics_providedpropertyservice_service__["a" /* ProvidedPropertyService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_metrics_expectedproperty_service__["a" /* ExpectedPropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_metrics_expectedproperty_service__["a" /* ExpectedPropertyService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_22__shared_dataservices_topologytemplate_relationshiptemplate_service__["a" /* RelationshipTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_22__shared_dataservices_topologytemplate_relationshiptemplate_service__["a" /* RelationshipTemplateService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_refinement_refinement_service__["a" /* RefinementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_refinement_refinement_service__["a" /* RefinementService */]) === "function" && _q || Object])
], TopologyModellerComponent);

var TopologyModellerComponent_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=topologymodeller.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_topologytemplate_topologytemplate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopologyTemplateToolComponent = TopologyTemplateToolComponent_1 = (function () {
    function TopologyTemplateToolComponent(topologyTemplateService) {
        this.topologyTemplateService = topologyTemplateService;
        this.topologyTemplates = [];
    }
    TopologyTemplateToolComponent.prototype.ngOnInit = function () {
        this.retrieveTopologyTemplates();
    };
    /********************************************************************************************************************************************************************************************************
    *
    *  @method - retrieveTopologyTemplates - Call the TopologyTemplateService for loading all TopologyTemplates from database into the application
    *                                        and subscribe for a callback. Currently no pagination/streaming of data is supported
    *
    *******************************************************************************************************************************************************************************************************/
    TopologyTemplateToolComponent.prototype.retrieveTopologyTemplates = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve TopologyTemplate Data', TopologyTemplateToolComponent_1.name);
        this.topologyTemplateService.getTopologyTemplates()
            .subscribe(function (topologyTemplateResponse) {
            _this.topologyTemplates = topologyTemplateResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Topology Template sucessfully retrieved.', TopologyTemplateToolComponent_1.name);
        });
    };
    return TopologyTemplateToolComponent;
}());
TopologyTemplateToolComponent = TopologyTemplateToolComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-topologytemplatetool',
        template: __webpack_require__(752),
        styles: [__webpack_require__(685)]
    })
    /****************************************************************************************************************************************
     *
     * @component - TopologyTemplateToolComponent - Lazy loaded component as wrapper for a better view result and for decoupling header
     *                                              from the data panel
     *
     * @author - Arthur Kaul
     *
     ***************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */]) === "function" && _a || Object])
], TopologyTemplateToolComponent);

var TopologyTemplateToolComponent_1, _a;
//# sourceMappingURL=topologytemplatetool.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNodeType; });
/**********************************************************************************************************************************************************************************************************
 *
 * @class - LevelGraphNodeType - Collection of all constant types of a LevelGraphNode which are currently supported by the application.
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var LevelGraphNodeType = (function () {
    function LevelGraphNodeType() {
    }
    return LevelGraphNodeType;
}());

LevelGraphNodeType.NODETYPE = 'NODETYPE';
LevelGraphNodeType.RELATIONSHIPTYPE = 'RELATIONSHIPTYPE';
LevelGraphNodeType.NODETYPEFRAGMENT = 'NODETYPEFRAGMENT';
LevelGraphNodeType.RELATIONSHIPTYPEFRAGMENT = 'RELATIONSHIPTYPEFRAGMENT';
//# sourceMappingURL=levelgraphnodetype.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_entity__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*******************************************************************************************************************************************************************************************************
 *
 * @class - Node - Superclass for all models which should be displayed as rectangles in the GraphModellerComponents or in the TopologyTemplateModell. It extends the entity class.
 *
 * @superclass - Entity
 * @superField - id: number - ID of the Node
 * @superField - name: string - Name of the Node
 * @superField - expectedProperties: ExpectedProperty[] - Array of expected properties of the Node
 * @superField - providedProperties: ProvidedProperty[] - Array of provided properties of the Node
 *
 * @field - x: number - x Position of the left upper corner of a rectangle
 * @field - y: number - y Position of the left upper corner of a rectangle
 * @field - width: number - Width of the rectangle
 * @field - height: number - Height of the rectangle
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/


var Node = (function (_super) {
    __extends(Node, _super);
    function Node() {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* Constants */].NODEWIDTH;
        _this.height = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* Constants */].NODEHEIGHT;
        _this.x = 0;
        _this.y = 0;
        _this.width = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* Constants */].NODEWIDTH;
        _this.height = __WEBPACK_IMPORTED_MODULE_0__constants_constants__["a" /* Constants */].NODEHEIGHT;
        return _this;
    }
    ;
    ;
    return Node;
}(__WEBPACK_IMPORTED_MODULE_1__entity_entity__["a" /* Entity */]));

//# sourceMappingURL=node.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_entity__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relation; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - Relation - Superclass for all models which should be displayed as lines in GraphModellerComponents. It extends the entity class.
 *
 * @superclass - Entity
 * @superField - id: number - ID of the Relation
 * @superField - name: string - Name of the Relation
 * @superField - expectedProperties: ExpectedProperty[] - Array of expected properties of the Relation
 * @superField - providedProperties: ProvidedProperty[] - Array of provided properties of the Relation
 *
 * @field - sourceNodeId: number - ID of the Source Node of relation
 * @field - targetNodeId: number - ID of the Target Node of relation
 * @field - path: Path - Path of the line from source node to target node
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var Relation = (function (_super) {
    __extends(Relation, _super);
    function Relation(sourceNodeId, targetNodeId, path) {
        var _this = _super.call(this) || this;
        _this.sourceNodeId = sourceNodeId;
        _this.targetNodeId = targetNodeId;
        _this.path = path;
        return _this;
    }
    ;
    /*****************************************************************************************************************************************************************************************************
     *
     * @method - isSourceNodeEqualTargetNode - Check if the relation is a self-loop relation
     *
     ****************************************************************************************************************************************************************************************************/
    Relation.prototype.isSourceNodeEqualTargetNode = function () {
        return (this.sourceNodeId === this.targetNodeId);
    };
    return Relation;
}(__WEBPACK_IMPORTED_MODULE_0__entity_entity__["a" /* Entity */]));

//# sourceMappingURL=relation.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Path; });
/*******************************************************************************************************************************************************************************************************
 *
 * @class - Path - A Collection of Points used for drawing relations/paths in a view
 *
 * @field - id: number - ID of a path in a view
 * @field - pathDataString: string - Specific representation of a path as a string so that SVG Path/Line elements can interpret the data
 * @field - points: Point[] - Array of all point in a path
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var Path = (function () {
    function Path(points) {
        this.points = points;
        this.createPath(points);
    }
    Path.prototype.createPath = function (points) {
        this.pathDataString = '';
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            this.pathDataString = this.pathDataString + point.x + ',' + point.y + ' ';
        }
    };
    Path.prototype.addPointToPath = function (point) {
        this.pathDataString = this.pathDataString + point.x + ',' + point.y + ' ';
    };
    Path.prototype.updatePath = function () {
        this.pathDataString = '';
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            this.pathDataString = this.pathDataString + point.x + ',' + point.y + ' ';
        }
    };
    return Path;
}());

//# sourceMappingURL=path.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/*******************************************************************************************************************************************************************************************************
 *
 * @class - Point - A point in a coordinate system used for drawing
 *
 * @field - x: number - X-Position in a Cartesian coordinate system
 * @field - y: number - Y-Position in a Cartesian coordinate system
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topologytemplate_topologytemplate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefinementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*********************************************************************************************************************************************************************************************************
 *
 * @service - RefinementService  - Implements the request call to the server interface and wait for a response to extract the results of the refinement process
 *
 *********************************************************************************************************************************************************************************************************/
var RefinementService = RefinementService_1 = (function () {
    function RefinementService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.refinmentAlgorithmURL = '/api/refinement';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - Send GET refineTopologyTemplate REQUEST
     *
     * @param - idTopologyTemplate: number - ID of the TopologyTemplate which should be refined
     * @param - steps: number - Number of refinement steps
     * @param - levelGraphs: LevelGraphs - Merged Level Graph which should be used for refinement
     *
     *******************************************************************************************************************************************************************************************************/
    RefinementService.prototype.refineTopologyTemplate = function (idTopologyTemplate, levelGraph, smi) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REFINEMNET]: Send GET Refined Topology Template Request', RefinementService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REFINEMNET]: ' + JSON.stringify(levelGraph), __WEBPACK_IMPORTED_MODULE_2__topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */].name);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.refinmentAlgorithmURL + '/refineTopologyTemplate/' + idTopologyTemplate + '/' + smi, levelGraph, options).map(this.extractTopologyTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - Send GET refineOneStepTopologyTemplate REQUEST
     *
     * @param - idTopologyTemplate: number - ID of the TopologyTemplate which should be refined
     * @param - levelGraph: LevelGraph - Merged Level Graph which should be used for refinement
     *
     *******************************************************************************************************************************************************************************************************/
    RefinementService.prototype.refineOneStepTopologyTemplate = function (idTopologyTemplate, levelGraph, smi) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REFINEMNET]: Send GET Refined Topology Template Request', RefinementService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REFINEMNET]: ' + JSON.stringify(levelGraph), __WEBPACK_IMPORTED_MODULE_2__topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */].name);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.refinmentAlgorithmURL + '/refineOneStepTopologyTemplate/' + idTopologyTemplate + '/' + smi, levelGraph, options).map(this.extractTopologyTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RefinementService.prototype.extractTopologyTemplates = function (res) {
        var body = res.json();
        var topologyTemplateList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - REFINEMNET]: Extract Topology Template Data List', __WEBPACK_IMPORTED_MODULE_2__topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */].name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - REFINEMNET]: ' + JSON.stringify(body), __WEBPACK_IMPORTED_MODULE_2__topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */].name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var topologytemplate = body_1[_i];
            var tempTopologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
            tempTopologyTemplate = topologytemplate;
            topologyTemplateList.push(tempTopologyTemplate);
        }
        return topologyTemplateList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - Extract data from response data object
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RefinementService.prototype.extractTopologyTemplate = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - REFINEMNET]: ' + JSON.stringify(body), __WEBPACK_IMPORTED_MODULE_2__topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */].name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - REFINEMNET]: Extract Topology Template Data', __WEBPACK_IMPORTED_MODULE_2__topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */].name);
        var topologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
        topologyTemplate = body;
        return topologyTemplate || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - Error Handling
     *
     *******************************************************************************************************************************************************************************************************/
    RefinementService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(errMsg);
    };
    return RefinementService;
}());
RefinementService = RefinementService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */]) === "function" && _a || Object])
], RefinementService);

var RefinementService_1, _a;
//# sourceMappingURL=refinement.service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgrahdetails_levelgraphdetails_module__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levelgraph_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LevelGraphModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphModule - Lazy loaded module as wrapper for all application modules and components which
     *                            should be accessible in the LevelGraphModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function LevelGraphModule() {
    }
    return LevelGraphModule;
}());
LevelGraphModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__levelgrahdetails_levelgraphdetails_module__["a" /* LevelGraphDetailsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__levelgraph_component__["a" /* LevelGraphComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__levelgraph_component__["a" /* LevelGraphComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphModule - Lazy loaded module as wrapper for all application modules and components which
     *                            should be accessible in the LevelGraphModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], LevelGraphModule);

//# sourceMappingURL=levelgraphmodule.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LevelGraphNodeComponent = LevelGraphNodeComponent_1 = (function () {
    function LevelGraphNodeComponent() {
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphNodeComponent', LevelGraphNodeComponent_1.name);
    };
    return LevelGraphNodeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]) === "function" && _a || Object)
], LevelGraphNodeComponent.prototype, "currentLevelGraph", void 0);
LevelGraphNodeComponent = LevelGraphNodeComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-levelgraphnode',
        template: __webpack_require__(755),
        styles: [__webpack_require__(688)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - LevelGraphNodeComponent - Lazy loaded component as wrapper for all other components in the LevelGraphNodeComponent
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], LevelGraphNodeComponent);

var LevelGraphNodeComponent_1, _a;
//# sourceMappingURL=levelgraphnode.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraphnode_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNodeDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LevelGraphNodeDetailsComponent = LevelGraphNodeDetailsComponent_1 = (function () {
    function LevelGraphNodeDetailsComponent(route, router, levelGraphNodeService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.levelGraphNodeService = levelGraphNodeService;
        this.flashMessageService = flashMessageService;
        this.currentLevelGraphNode = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__["a" /* LevelGraphNode */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphNodeDetailsComponent', LevelGraphNodeDetailsComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentLevelGraphNode.id = params['id'] || null;
        });
        this.retrieveLevelGraphNode(this.currentLevelGraphNode.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveLevelGraphNode - Call the LevelGraphNodeService for loading LevelGraphNode from database into the application and subscribe for a callback.
     *
     * @param - id: number - ID of the LevelGraphNode which should be loaded from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeDetailsComponent.prototype.retrieveLevelGraphNode = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraphNode Data', LevelGraphNodeDetailsComponent_1.name);
        this.levelGraphNodeService.getLevelGraphNode(id)
            .subscribe(function (levelGraphNodeResponse) {
            _this.currentLevelGraphNode = levelGraphNodeResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('LevelGraphNode sucessfully retrieved.', LevelGraphNodeDetailsComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    return LevelGraphNodeDetailsComponent;
}());
LevelGraphNodeDetailsComponent = LevelGraphNodeDetailsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-levelgraphnodedetails',
        template: __webpack_require__(757),
        styles: [__webpack_require__(690)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - LevelGraphNodeDetailsComponent - Lazy loaded component as wrapper for all other components in the LevelGraphNodeDetailsComponent
     *
     * @field - currentLevelGraphNode: LevelGraphNode - LevelGraphNode which is currently displayed
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                     cause a "Over Flash" for the user experience
     *
     * @author Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraphnode_service__["a" /* LevelGraphNodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraphnode_service__["a" /* LevelGraphNodeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], LevelGraphNodeDetailsComponent);

var LevelGraphNodeDetailsComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=levelgraphnodedetails.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphrelation_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levelgraphrelationdetails_levelgraphrelationdetails_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LevelGraphRelationModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the LevelGraphModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function LevelGraphRelationModule() {
    }
    return LevelGraphRelationModule;
}());
LevelGraphRelationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__levelgraphrelationdetails_levelgraphrelationdetails_module__["a" /* LevelGraphRelationDetailsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__levelgraphrelation_component__["a" /* LevelGraphRelationComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__levelgraphrelation_component__["a" /* LevelGraphRelationComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the LevelGraphModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], LevelGraphRelationModule);

//# sourceMappingURL=levelgraphrelationmodule.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_nodetemplate_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTemplateDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NodeTemplateDetailsComponent = NodeTemplateDetailsComponent_1 = (function () {
    function NodeTemplateDetailsComponent(route, router, nodeTemplateService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.nodeTemplateService = nodeTemplateService;
        this.flashMessageService = flashMessageService;
        this.currentNodeTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__["a" /* NodeTemplate */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize NodeTemplateDetailsComponent', NodeTemplateDetailsComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentNodeTemplate.id = params['id'] || null;
        });
        this.retrieveNodeTemplate(this.currentNodeTemplate.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveNodeTemplate - Call the NodeTemplateService for loading NodeTemplate from database into the application and subscribe for a callback.
     *
     * @param - id: number - ID of the NodeTemplate which should be loaded from the database
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateDetailsComponent.prototype.retrieveNodeTemplate = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve NodeTemplate Data', NodeTemplateDetailsComponent_1.name);
        this.nodeTemplateService.getNodeTemplate(id)
            .subscribe(function (nodeTemplateResponse) {
            _this.currentNodeTemplate = nodeTemplateResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('NodeTemplate sucessfully retrieved.', NodeTemplateDetailsComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    return NodeTemplateDetailsComponent;
}());
NodeTemplateDetailsComponent = NodeTemplateDetailsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-nodetemplatedetails',
        template: __webpack_require__(765),
        styles: [__webpack_require__(698)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - NodeTemplateDetailsComponent - Lazy loaded component as wrapper for all other components in the NodeTemplateDetailsComponent
     *
     * @field - currentNodeTemplate: NodeTemplate - NodeTemplate which is currently displayed
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_nodetemplate_service__["a" /* NodeTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_nodetemplate_service__["a" /* NodeTemplateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], NodeTemplateDetailsComponent);

var NodeTemplateDetailsComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=nodetemplatedetails.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relationshiptemplate_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relationshiptemplatedetails_relationshiptemplatedetails_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTemplateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RelationshipTemplateModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTemplateModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the RelationshipTemplateModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function RelationshipTemplateModule() {
    }
    return RelationshipTemplateModule;
}());
RelationshipTemplateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__relationshiptemplatedetails_relationshiptemplatedetails_module__["a" /* RelationshipTemplateDetailsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__relationshiptemplate_component__["a" /* RelationshipTemplateComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__relationshiptemplate_component__["a" /* RelationshipTemplateComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTemplateModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the RelationshipTemplateModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], RelationshipTemplateModule);

//# sourceMappingURL=relationshiptemplate.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_relationshiptemplate_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levelgraphrelation_levelgraphrelationdetails_levelgraphrelationdetails_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTemplateDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RelationshipTemplateDetailsComponent = (function () {
    function RelationshipTemplateDetailsComponent(route, router, relationshipTemplateService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.relationshipTemplateService = relationshipTemplateService;
        this.flashMessageService = flashMessageService;
        this.currentRelationshipTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */](null, null, null, null, null);
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphRelationDetailsComponent', __WEBPACK_IMPORTED_MODULE_3__levelgraphrelation_levelgraphrelationdetails_levelgraphrelationdetails_component__["a" /* LevelGraphRelationDetailsComponent */].name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentRelationshipTemplate.id = params['id'] || null;
        });
        this.retrieveRelationshipTemplate(this.currentRelationshipTemplate.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveLevelGraphRelation - Call the LevelGraphRelationService for loading LevelGraphNode from database into the application and subscribe for a callback.
     *
     * @param - id: number - ID of the LevelGraphRelation which should be loaded from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTemplateDetailsComponent.prototype.retrieveRelationshipTemplate = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve RelationshipTemplate Data', __WEBPACK_IMPORTED_MODULE_3__levelgraphrelation_levelgraphrelationdetails_levelgraphrelationdetails_component__["a" /* LevelGraphRelationDetailsComponent */].name);
        this.relationshipTemplateService.getRelationshipTemplate(id)
            .subscribe(function (relationshipTemplateResponse) {
            _this.currentRelationshipTemplate = relationshipTemplateResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('RelationshipTemplate sucessfully retrieved.', __WEBPACK_IMPORTED_MODULE_3__levelgraphrelation_levelgraphrelationdetails_levelgraphrelationdetails_component__["a" /* LevelGraphRelationDetailsComponent */].name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    return RelationshipTemplateDetailsComponent;
}());
RelationshipTemplateDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-relationshiptemplatedetails',
        template: __webpack_require__(768),
        styles: [__webpack_require__(701)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - RelationshipTemplateDetailsComponent - Lazy loaded component as wrapper for all other components in the RelationshipTemplateDetailsComponent
     *
     * @field - currentRelationshipTemplate: RelationshipTemplate - RelationshipTemplate which is currently displayed
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_relationshiptemplate_service__["a" /* RelationshipTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_relationshiptemplate_service__["a" /* RelationshipTemplateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], RelationshipTemplateDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=relationshiptemplatedetails.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_repository_repository_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RepositoryDetailsComponent = RepositoryDetailsComponent_1 = (function () {
    function RepositoryDetailsComponent(route, router, repositoryService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.repositoryService = repositoryService;
        this.flashMessageService = flashMessageService;
        this.currentRepository = new __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method ngOnInit is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize RepositoryDetailsComponent', RepositoryDetailsComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentRepository.id = params['id'] || null;
        });
        this.retrieveRepositoryData(this.currentRepository.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method retrieveRepositoryData - Call the RepositoryService for loading repository from database into the application and subscribe
     *                                  for a callback.
     *
     * @param id: string - ID of the Repository which should be loaded from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryDetailsComponent.prototype.retrieveRepositoryData = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve Repository Data', RepositoryDetailsComponent_1.name);
        this.repositoryService.getRepository(id)
            .subscribe(function (repositoryResponse) {
            _this.currentRepository = repositoryResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repositories sucessfully retrieved.', RepositoryDetailsComponent_1.name);
        });
    };
    return RepositoryDetailsComponent;
}());
RepositoryDetailsComponent = RepositoryDetailsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-repositorydetails',
        template: __webpack_require__(770),
        styles: [__webpack_require__(703)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - RepositoryDetailsComponent - Lazy loaded component as wrapper for all other components in the
     *                                           RepositoryDetailsComponent
     *
     * @field - currentRepository: Repository - Repository which is currently displayed
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_repository_repository_service__["a" /* RepositoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_repository_repository_service__["a" /* RepositoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], RepositoryDetailsComponent);

var RepositoryDetailsComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=repositorydetails.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_topologytemplate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levelgraph_levelgrahdetails_levelgrahdetails_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TopologyTemplateDetailsComponent = (function () {
    function TopologyTemplateDetailsComponent(route, router, topologyTemplateService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.topologyTemplateService = topologyTemplateService;
        this.flashMessageService = flashMessageService;
        this.currentTopologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method ngOnInit is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphDetailsComponent', __WEBPACK_IMPORTED_MODULE_3__levelgraph_levelgrahdetails_levelgrahdetails_component__["a" /* LevelGraphDetailsComponent */].name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentTopologyTemplate.id = params['id'] || null;
        });
        this.retrieveTopologyTemplate(this.currentTopologyTemplate.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method retrieveRepositoryData - Call the RepositoryService for loading repository from database into the application and subscribe
     *                                  for a callback.
     *
     * @param id: number - ID of the Repository which should be loaded from the database
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateDetailsComponent.prototype.retrieveTopologyTemplate = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraph Data', __WEBPACK_IMPORTED_MODULE_3__levelgraph_levelgrahdetails_levelgrahdetails_component__["a" /* LevelGraphDetailsComponent */].name);
        this.topologyTemplateService.getTopologyTemplate(id)
            .subscribe(function (levelGraphResponse) {
            _this.currentTopologyTemplate = levelGraphResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('LevelGraph sucessfully retrieved.', __WEBPACK_IMPORTED_MODULE_3__levelgraph_levelgrahdetails_levelgrahdetails_component__["a" /* LevelGraphDetailsComponent */].name);
        });
    };
    return TopologyTemplateDetailsComponent;
}());
TopologyTemplateDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-topologytemplatedetails',
        template: __webpack_require__(773),
        styles: [__webpack_require__(705)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component TopologyTemplateDetailsComponent - Lazy loaded component as wrapper for all other components in the
     *                                               TopologyTemplateDetailsComponent
     *
     * @author Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], TopologyTemplateDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topologytemplatedetails.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topologytemplate_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topologytemplatedetails_topologytemplatedetails_module__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TopologyTemplateModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - TopologyTemplateModule - Lazy loaded module as wrapper for all application modules and components which
     *                                    should be accessible in the TopologyTemplateModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function TopologyTemplateModule() {
    }
    return TopologyTemplateModule;
}());
TopologyTemplateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__topologytemplatedetails_topologytemplatedetails_module__["a" /* TopologyTemplateDetailsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__topologytemplate_component__["a" /* TopologyTemplateComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__topologytemplate_component__["a" /* TopologyTemplateComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - TopologyTemplateModule - Lazy loaded module as wrapper for all application modules and components which
     *                                    should be accessible in the TopologyTemplateModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], TopologyTemplateModule);

//# sourceMappingURL=topologytemplatemodule.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_nodetype__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_nodetype_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTypeDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NodeTypeDetailsComponent = NodeTypeDetailsComponent_1 = (function () {
    function NodeTypeDetailsComponent(route, router, nodeTypeService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.nodeTypeService = nodeTypeService;
        this.flashMessageService = flashMessageService;
        this.currentNodeType = new __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_nodetype__["a" /* NodeType */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize NodeTypeDetails Component', NodeTypeDetailsComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentNodeType.id = params['id'] || null;
        });
        this.retrieveNodeType(this.currentNodeType.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveNodeType - Load NodeType with id from the database
     *
     * @param - id: number - ID of the NodeType witch should be loaded
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeDetailsComponent.prototype.retrieveNodeType = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve Node Type Data', NodeTypeDetailsComponent_1.name);
        this.nodeTypeService.getNodeType(id)
            .subscribe(function (nodeTypeResponse) {
            _this.currentNodeType = nodeTypeResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Node Type sucessfully retrieved.', NodeTypeDetailsComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    return NodeTypeDetailsComponent;
}());
NodeTypeDetailsComponent = NodeTypeDetailsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-nodetypedetails',
        template: __webpack_require__(776),
        styles: [__webpack_require__(708)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - NodeTypeDetailsComponent Class - The component displays the details of a NodeType Object.
     *
     *
     * @field - currentNodeType: NodeType -  NodeType which is currently selected
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], NodeTypeDetailsComponent);

var NodeTypeDetailsComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=nodetypedetails.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modules_metrics_property_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodetypedetails_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTypeDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NodeTypeDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTypeDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                   should be accessible in the NodeTypeDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function NodeTypeDetailsModule() {
    }
    return NodeTypeDetailsModule;
}());
NodeTypeDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_0__shared_modules_metrics_property_module__["a" /* PropertyModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__nodetypedetails_component__["a" /* NodeTypeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__nodetypedetails_component__["a" /* NodeTypeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTypeDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                   should be accessible in the NodeTypeDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], NodeTypeDetailsModule);

//# sourceMappingURL=nodetypedetlails.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodetype_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodetypedetails_nodetypedetlails_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTypeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NodeTypeModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTypeModule - Lazy loaded module as wrapper for all application modules and components which
     *                            should be accessible in the NodeTypeModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function NodeTypeModule() {
    }
    return NodeTypeModule;
}());
NodeTypeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__nodetypedetails_nodetypedetlails_module__["a" /* NodeTypeDetailsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__nodetype_component__["a" /* NodeTypeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__nodetype_component__["a" /* NodeTypeComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTypeModule - Lazy loaded module as wrapper for all application modules and components which
     *                            should be accessible in the NodeTypeModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], NodeTypeModule);

//# sourceMappingURL=nodetypemodule.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modules_metrics_property_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relationshiptypedetails_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTypeDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RelationshipTypeDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTypeDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                           should be accessible in the RelationshipTypeDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function RelationshipTypeDetailsModule() {
    }
    return RelationshipTypeDetailsModule;
}());
RelationshipTypeDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_0__shared_modules_metrics_property_module__["a" /* PropertyModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__relationshiptypedetails_component__["a" /* RelationshipTypeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__relationshiptypedetails_component__["a" /* RelationshipTypeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTypeDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                           should be accessible in the RelationshipTypeDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], RelationshipTypeDetailsModule);

//# sourceMappingURL=relationshipdetails.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_relationshiptype__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_relationshiptype_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTypeDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RelationshipTypeDetailsComponent = RelationshipTypeDetailsComponent_1 = (function () {
    function RelationshipTypeDetailsComponent(route, router, relationshipTypeService, flashMessageService) {
        this.route = route;
        this.router = router;
        this.relationshipTypeService = relationshipTypeService;
        this.flashMessageService = flashMessageService;
        this.currentRelationshipType = new __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_relationshiptype__["a" /* RelationshipType */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize RelationshipTypeDetails Component', RelationshipTypeDetailsComponent_1.name);
        this.route.queryParams.subscribe(function (params) {
            _this.currentRelationshipType.id = params['id'] || null;
        });
        this.retrieveRelationshipType(this.currentRelationshipType.id);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveRelationshipType - Load RelationshipType with id from the database
     *
     * @param - id: number - ID of the RelationshipType witch should be loaded
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeDetailsComponent.prototype.retrieveRelationshipType = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve RelationshipType Data', RelationshipTypeDetailsComponent_1.name);
        this.relationshipTypeService.getRelationshipType(id)
            .subscribe(function (relationshipTypeResponse) {
            _this.currentRelationshipType = relationshipTypeResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Relationship Type sucessfully retrieved.', RelationshipTypeDetailsComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    return RelationshipTypeDetailsComponent;
}());
RelationshipTypeDetailsComponent = RelationshipTypeDetailsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-relationshiptypedetails',
        template: __webpack_require__(779),
        styles: [__webpack_require__(711)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - RelationshipTypeDetailsComponent Class - The component displays the detaisl of a RelationshipType Object.
     *
     *
     * @field - currentRelationshipType: RelationshipType -  RelationshipType which is currently selected
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], RelationshipTypeDetailsComponent);

var RelationshipTypeDetailsComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=relationshiptypedetails.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relationshiptype_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relationshiptypedetails_relationshipdetails_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTypeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RelationshipTypeModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTypeModule - Lazy loaded module as wrapper for all application modules and components which
     *                                    should be accessible in the RelationshipTypeModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function RelationshipTypeModule() {
    }
    return RelationshipTypeModule;
}());
RelationshipTypeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_1__relationshiptypedetails_relationshipdetails_module__["a" /* RelationshipTypeDetailsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__relationshiptype_component__["a" /* RelationshipTypeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__relationshiptype_component__["a" /* RelationshipTypeComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTypeModule - Lazy loaded module as wrapper for all application modules and components which
     *                                    should be accessible in the RelationshipTypeModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], RelationshipTypeModule);

//# sourceMappingURL=relationshiptypemodule.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utility; });
/*********************************************************************************************************************************************************************************************************
 *
 * @class - Utility - Helper class for different methods like update a element in an array or delete an element from an array
 *
 * @author - Arthur Kaul
 *
 ********************************************************************************************************************************************************************************************************/
var Utility = (function () {
    function Utility() {
    }
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - deleteElementFromArry - Delete an element from an array
     *
     * @param - id: number - ID of the element which should be removed from the array
     * @param - array: any[] - Array of the elements
     *
     ******************************************************************************************************************************************************************************************************/
    Utility.deleteElementFromArry = function (id, array) {
        array = array.filter(function (obj) {
            return obj.id !== id;
        });
        return array;
    };
    Utility.deleteElementFromArryS = function (id, array) {
        array = array.filter(function (obj) {
            return obj.id !== id;
        });
        return array;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - updateElementInArry - Update an element from an array
     *
     * @param - element: any - Element which should be updated in the array
     * @param - array: any[] - Array of the elements
     *
     ******************************************************************************************************************************************************************************************************/
    Utility.updateElementInArry = function (element, array) {
        for (var i = 0; i < array.length; i++) {
            if (element.id === array[i].id) {
                array[i] = element;
            }
        }
        return array;
    };
    return Utility;
}());

//# sourceMappingURL=utility.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 458;


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(483);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_dataservices_exportxml_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_dataservices_repository_repository_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_dataservices_levelgraph_level_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_dataservices_levelgraph_levelgraphnode_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_dataservices_levelgraph_levelgraphrelation_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_metrics_expectedproperty_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_types_nodetype_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_types_relationshiptype_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_topologytemplate_topologytemplate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_topologytemplate_nodetemplate_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_topologytemplate_relationshiptemplate_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_metrics_property_service__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_dataservices_metrics_providedpropertyservice_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_dataservices_refinement_refinement_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    /*********************************************************************************************************************************************************************************************************
     *
     * @module - AppModule - Module as wrapper for the whole application modules and components. It is the root module of the application.
     *                       You should register all services here so that the are accessible from everywhere.
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_1__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__["a" /* DashboardModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_dataservices_exportxml_service__["a" /* ExportXmlService */], __WEBPACK_IMPORTED_MODULE_22__shared_dataservices_refinement_refinement_service__["a" /* RefinementService */], __WEBPACK_IMPORTED_MODULE_14__shared_dataservices_metrics_expectedproperty_service__["a" /* ExpectedPropertyService */], __WEBPACK_IMPORTED_MODULE_21__shared_dataservices_metrics_providedpropertyservice_service__["a" /* ProvidedPropertyService */], __WEBPACK_IMPORTED_MODULE_20__shared_dataservices_metrics_property_service__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_9__shared_dataservices_repository_repository_service__["a" /* RepositoryService */], __WEBPACK_IMPORTED_MODULE_19__shared_dataservices_topologytemplate_relationshiptemplate_service__["a" /* RelationshipTemplateService */], __WEBPACK_IMPORTED_MODULE_18__shared_dataservices_topologytemplate_nodetemplate_service__["a" /* NodeTemplateService */], __WEBPACK_IMPORTED_MODULE_13__shared_dataservices_levelgraph_levelgraphrelation_service__["a" /* LevelGraphRelationService */], __WEBPACK_IMPORTED_MODULE_15__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */], __WEBPACK_IMPORTED_MODULE_16__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */], __WEBPACK_IMPORTED_MODULE_11__shared_dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */], __WEBPACK_IMPORTED_MODULE_10__shared_dataservices_levelgraph_level_service__["a" /* LevelService */], __WEBPACK_IMPORTED_MODULE_12__shared_dataservices_levelgraph_levelgraphnode_service__["a" /* LevelGraphNodeService */], __WEBPACK_IMPORTED_MODULE_17__shared_dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
    })
    /*********************************************************************************************************************************************************************************************************
     *
     * @module - AppModule - Module as wrapper for the whole application modules and components. It is the root module of the application.
     *                       You should register all services here so that the are accessible from everywhere.
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_routes__ = __webpack_require__(476);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

/*********************************************************************************************************************************************************************************************************
 *
 * @route - Routes - Path for the entry point of the application and for all components and modules which
 *                   should be accessible from the application root
 *
 * @author - Arthur Kaul
 *
 ********************************************************************************************************************************************************************************************************/
var routes = __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_routes__["a" /* DashboardRoutes */].concat([
    { path: '**', redirectTo: 'dashboard/administration', pathMatch: 'full' }
]);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modules_levelgraph_levelgraphmodule__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_metrics_property_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administration_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_modules_repository_repositorymodule__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_topologytemplate_topologytemplatemodule__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_types_nodetype_nodetypemodule__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_modules_types_relationshiptype_relationshiptypemodule__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdministrationModule = (function () {
    /*******************************************************************************************************************
     *
     * @module - AdministrationModule - Lazy loaded module as wrapper for all application modules and components which
     *                                  should be accessible in the AdministrationModule
     *
     * @author - Arthur Kaul
     *
     ******************************************************************************************************************/
    function AdministrationModule() {
    }
    return AdministrationModule;
}());
AdministrationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileUploadModule"], __WEBPACK_IMPORTED_MODULE_0__shared_modules_levelgraph_levelgraphmodule__["a" /* LevelGraphModule */], __WEBPACK_IMPORTED_MODULE_6__shared_modules_repository_repositorymodule__["a" /* RepositoryModule */], __WEBPACK_IMPORTED_MODULE_7__shared_modules_topologytemplate_topologytemplatemodule__["a" /* TopologyTemplateModule */], __WEBPACK_IMPORTED_MODULE_8__shared_modules_types_nodetype_nodetypemodule__["a" /* NodeTypeModule */], __WEBPACK_IMPORTED_MODULE_9__shared_modules_types_relationshiptype_relationshiptypemodule__["a" /* RelationshipTypeModule */], __WEBPACK_IMPORTED_MODULE_1__shared_modules_metrics_property_module__["a" /* PropertyModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__administration_component__["a" /* AdministrationComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__administration_component__["a" /* AdministrationComponent */]]
    })
    /*******************************************************************************************************************
     *
     * @module - AdministrationModule - Lazy loaded module as wrapper for all application modules and components which
     *                                  should be accessible in the AdministrationModule
     *
     * @author - Arthur Kaul
     *
     ******************************************************************************************************************/
], AdministrationModule);

//# sourceMappingURL=administration.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__administration_component__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrationRoutes; });

/*******************************************************************************************************************
 *
 * @route - AdministrationRoutes - Path for the navigation to the AdministrationModule
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************/
var AdministrationRoutes = [
    {
        path: 'administration',
        component: __WEBPACK_IMPORTED_MODULE_0__administration_component__["a" /* AdministrationComponent */]
    }
];
//# sourceMappingURL=administration.routes.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_index__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__administration_administration_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__levelgraphtool_levelgraphtool_module__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topologytool_topologytemplatetool_module__ = __webpack_require__(481);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = (function () {
    /*******************************************************************************************************************
     *
     * @module - DashboardModule - Lazy loaded module as wrapper for all application modules and components which should
     *                             be accessible in the TopologyToolModule
     *
     * @author - Arthur Kaul
     *
     ******************************************************************************************************************/
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__topologytool_topologytemplatetool_module__["a" /* TopologyTemplateToolModule */],
            __WEBPACK_IMPORTED_MODULE_7__levelgraphtool_levelgraphtool_module__["a" /* LevelGraphToolModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__administration_administration_module__["a" /* AdministrationModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_index__["a" /* TopNavComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_index__["a" /* TopNavComponent */]]
    })
    /*******************************************************************************************************************
     *
     * @module - DashboardModule - Lazy loaded module as wrapper for all application modules and components which should
     *                             be accessible in the TopologyToolModule
     *
     * @author - Arthur Kaul
     *
     ******************************************************************************************************************/
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modules_levelgraph_levelgrahdetails_levelgraphdetails_routes__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_levelgraphnode_levelgraphnodedetails_levelgraphnodedetailsroutes__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_levelgraphrelation_levelgraphrelationdetails_levelgraphrelationdetailsroutes__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_nodetemplate_nodetemplatedetails_nodetemplatedetails_routes__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_relationshiptemplate_relationshiptemplatedetails_relationshiptemplatedetails_routes__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_repository_repositorydetails_repositorydetails_routes__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_modules_topologytemplate_topologytemplatedetails_topologytemplatesdetails_routes__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_types_nodetype_nodetypedetails_nodetypedetails_routes__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_types_relationshiptype_relationshiptypedetails_relationshipdetails_routes__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__administration_administration_routes__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__levelgraphtool_levelgraphmodeller_levelgraphmodeller_routes__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__levelgraphtool_levelgraphtool_routes__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__topologytool_topologymodeller_topologymodeller_routes__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__topologytool_topologytemplatetool_routes__ = __webpack_require__(482);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });















/*******************************************************************************************************************
 *
 * @route - DashboardRoutes - Path for the navigation handling in the front-end for all components and modules which
 *                            should be accessible from the DashboardModule
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************/
var DashboardRoutes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_10__dashboard_component__["a" /* DashboardComponent */],
        children: __WEBPACK_IMPORTED_MODULE_9__administration_administration_routes__["a" /* AdministrationRoutes */].concat(__WEBPACK_IMPORTED_MODULE_12__levelgraphtool_levelgraphtool_routes__["a" /* LevelGraphToolRoutes */], __WEBPACK_IMPORTED_MODULE_14__topologytool_topologytemplatetool_routes__["a" /* TopologyTemplateToolRoutes */], __WEBPACK_IMPORTED_MODULE_11__levelgraphtool_levelgraphmodeller_levelgraphmodeller_routes__["a" /* LevelGraphModellerRoutes */], __WEBPACK_IMPORTED_MODULE_13__topologytool_topologymodeller_topologymodeller_routes__["a" /* TopologyModellerRoutes */], __WEBPACK_IMPORTED_MODULE_5__shared_modules_repository_repositorydetails_repositorydetails_routes__["a" /* RepositoryDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_7__shared_modules_types_nodetype_nodetypedetails_nodetypedetails_routes__["a" /* NodeTypeDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_8__shared_modules_types_relationshiptype_relationshiptypedetails_relationshipdetails_routes__["a" /* RelationshipDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_0__shared_modules_levelgraph_levelgrahdetails_levelgraphdetails_routes__["a" /* LevelGraphDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_1__shared_modules_levelgraphnode_levelgraphnodedetails_levelgraphnodedetailsroutes__["a" /* LevelGraphNodeDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_2__shared_modules_levelgraphrelation_levelgraphrelationdetails_levelgraphrelationdetailsroutes__["a" /* LevelGraphRelationDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_6__shared_modules_topologytemplate_topologytemplatedetails_topologytemplatesdetails_routes__["a" /* TopologyTemplatesDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_3__shared_modules_nodetemplate_nodetemplatedetails_nodetemplatedetails_routes__["a" /* NodeTemplateDetailsRoutes */], __WEBPACK_IMPORTED_MODULE_4__shared_modules_relationshiptemplate_relationshiptemplatedetails_relationshiptemplatedetails_routes__["a" /* RelationshipTemplateDetailsRoutes */]),
    }
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphmodeller_component__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphModellerRoutes; });

/*******************************************************************************************************************
 *
 * @route - LevelGraphModellerRoutes path for the navigation handling in the front-end
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************/
var LevelGraphModellerRoutes = [
    {
        path: 'levelgraphmodeller',
        component: __WEBPACK_IMPORTED_MODULE_0__levelgraphmodeller_component__["a" /* LevelGraphModellerComponent */],
    }
];
//# sourceMappingURL=levelgraphmodeller.routes.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphmodeller_levelgraphmodeller_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_levelgraph_levelgraphmodule__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_types_nodetype_nodetypedetails_nodetypedetlails_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_types_relationshiptype_relationshiptypedetails_relationshipdetails_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__levelgraphtool_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphToolModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LevelGraphToolModule = (function () {
    /*******************************************************************************************************************
     *
     * @module - LevelGraphToolModule for importing other modules and declaration/export the components
     *
     * @author - Arthur Kaul
     *
     ******************************************************************************************************************/
    function LevelGraphToolModule() {
    }
    return LevelGraphToolModule;
}());
LevelGraphToolModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_levelgraph_levelgraphmodule__["a" /* LevelGraphModule */], __WEBPACK_IMPORTED_MODULE_2__shared_modules_types_nodetype_nodetypedetails_nodetypedetlails_module__["a" /* NodeTypeDetailsModule */], __WEBPACK_IMPORTED_MODULE_3__shared_modules_types_relationshiptype_relationshiptypedetails_relationshipdetails_module__["a" /* RelationshipTypeDetailsModule */], __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__["FileUploadModule"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__levelgraphtool_component__["a" /* LevelGraphToolComponent */], __WEBPACK_IMPORTED_MODULE_0__levelgraphmodeller_levelgraphmodeller_component__["a" /* LevelGraphModellerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__levelgraphtool_component__["a" /* LevelGraphToolComponent */], __WEBPACK_IMPORTED_MODULE_0__levelgraphmodeller_levelgraphmodeller_component__["a" /* LevelGraphModellerComponent */]]
    })
    /*******************************************************************************************************************
     *
     * @module - LevelGraphToolModule for importing other modules and declaration/export the components
     *
     * @author - Arthur Kaul
     *
     ******************************************************************************************************************/
], LevelGraphToolModule);

//# sourceMappingURL=levelgraphtool.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphtool_component__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphToolRoutes; });

/*******************************************************************************************************************
 *
 * @route - LevelGraphToolRoutes path for the navigation handling in the front-end
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************/
var LevelGraphToolRoutes = [
    {
        path: 'levelgraphtool',
        component: __WEBPACK_IMPORTED_MODULE_0__levelgraphtool_component__["a" /* LevelGraphToolComponent */],
    }
];
//# sourceMappingURL=levelgraphtool.routes.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/*******************************************************************************************************************************************************************************************************
 *
 * @class - Entity - Superclass for all entities like LevelGraphNodes, NodeTypes, NodeTemplates. etc. if you want to extend the data of all this objects for example with metrics put this
 *                   data as fields into this class like the expected and provided properties.
 *
 * @field - id: number - ID of the Entity
 * @field - name: string - Name of the Entity
 * @field - expectedProperties: ExpectedProperty[] - Array of expected properties of the entity
 * @field - providedProperties: ProvidedProperty[] - Array of provided properties of the entity
 *
 * @hint - Further improvement: You may decide to add an view object as field for graphical representation to decouple view data from processing data
 * @hint - Currently only a default constructor is supported one some data models you may decide to overload this constructors
 * @hint - Currently no getters and setters are used for accessing the fields you may decide to implement them. But this may lead to errors at runtime if you set the fields to private because,
 *         sometimes you have Objects of type any which don`t no the getter and setter of the field and you have to at this places the . operator.
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var Entity = (function () {
    function Entity() {
        this.id = null;
        this.name = 'Unnamed';
        this.expectedProperties = [];
        this.providedProperties = [];
        this.icon = '/assets/img/nodeTypeDefault.png';
    }
    return Entity;
}());

//# sourceMappingURL=entity.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topologymodeller_component__ = __webpack_require__(195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyModellerRoutes; });

/*******************************************************************************************************************
 *
 * @route - TopologyModellerRoutes - Path to the TopologyModellerComponent
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************/
var TopologyModellerRoutes = [
    {
        path: 'topologymodeller',
        component: __WEBPACK_IMPORTED_MODULE_0__topologymodeller_component__["a" /* TopologyModellerComponent */],
    }
];
//# sourceMappingURL=topologymodeller.routes.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topologymodeller_topologymodeller_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_topologytemplate_topologytemplatemodule__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topologytemplatetool_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateToolModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TopologyTemplateToolModule = (function () {
    /****************************************************************************************************************************************
     *
     * @module - TopologyTemplateToolModule - Lazy loaded module as wrapper for all components which should be accessible in the
     *                                        TopologyToolModule
     *
     * @author - Arthur Kaul
     *
     ***************************************************************************************************************************************/
    function TopologyTemplateToolModule() {
    }
    return TopologyTemplateToolModule;
}());
TopologyTemplateToolModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_topologytemplate_topologytemplatemodule__["a" /* TopologyTemplateModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__topologytemplatetool_component__["a" /* TopologyTemplateToolComponent */], __WEBPACK_IMPORTED_MODULE_0__topologymodeller_topologymodeller_component__["a" /* TopologyModellerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__topologytemplatetool_component__["a" /* TopologyTemplateToolComponent */], __WEBPACK_IMPORTED_MODULE_0__topologymodeller_topologymodeller_component__["a" /* TopologyModellerComponent */]]
    })
    /****************************************************************************************************************************************
     *
     * @module - TopologyTemplateToolModule - Lazy loaded module as wrapper for all components which should be accessible in the
     *                                        TopologyToolModule
     *
     * @author - Arthur Kaul
     *
     ***************************************************************************************************************************************/
], TopologyTemplateToolModule);

//# sourceMappingURL=topologytemplatetool.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topologytemplatetool_component__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateToolRoutes; });

/*******************************************************************************************************************
 *
 * @route - TopologyTemplateToolRoutes - Path to the TopologyTemplateToolComponent
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************/
var TopologyTemplateToolRoutes = [
    {
        path: 'topologytemplatetool',
        component: __WEBPACK_IMPORTED_MODULE_0__topologytemplatetool_component__["a" /* TopologyTemplateToolComponent */],
    }
];
//# sourceMappingURL=topologytemplatetool.routes.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(471);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(190);
/* unused harmony namespace reexport */
/*********************************************************************************************************************************************************************************************************
 *  This barrel file provides the export for the lazy loaded AppComponent.
 ********************************************************************************************************************************************************************************************************/


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelationType; });
/**********************************************************************************************************************************************************************************************************
 *
 * @class - LevelGraphRelationType - Collection of all constant types of a LevelGraphRelation which are currently supported by the application
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var LevelGraphRelationType = (function () {
    function LevelGraphRelationType() {
    }
    return LevelGraphRelationType;
}());

LevelGraphRelationType.REFINE_TO = 'REFINE_TO';
LevelGraphRelationType.CONNECT_OVER_TO = 'CONNECT_OVER_TO';
//# sourceMappingURL=levelgraphrelationtype.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_property__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - PropertyService  - Implements the calls to the rest interface of the application server and
 *                               handle the request construction and response extraction for Property data
 *
 *********************************************************************************************************************************************************************************************************/
var PropertyService = PropertyService_1 = (function () {
    function PropertyService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.propertyUrl = '/api/properties';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getProperties - Send GET all Properties REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.getProperties = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - PROPERTY] Send GET Properties Request', PropertyService_1.name);
        return this.http.get(this.propertyUrl).map(this.extractProperties).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getProperty - Send GET Property REQUEST
     *
     * @param - id: number - Property which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.getProperty = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - PROPERTY] Send GET Property Request with ID:' + id, PropertyService_1.name);
        return this.http.get(this.propertyUrl + '/' + id).map(this.extractProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createProperty - Send POST Property REQUEST
     *
     * @param - property: Property - Property which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.createProperty = function (property) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - PROPERTY] Send POST Property Request', PropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - PROPERTY]' + JSON.stringify(property), PropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.propertyUrl, property, options).map(this.extractProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateProperty - Send PUT Property REQUEST
     *
     * @param - property: Property - Property which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.updateProperty = function (property) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - PROPERTY] Send PUT Request Property', PropertyService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - PROPERTY] ' + JSON.stringify(property), PropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.propertyUrl + '/' + property.id, property, options).map(this.extractProperty).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteProperty - Send DELETE Property REQUEST
     *
     * @param - id: number - ID of the Property which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.deleteProperty = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - PROPERTY] Send DELETE NodeType Request with ID: ' + id, PropertyService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.propertyUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response -extractProperties - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.extractProperties = function (res) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - PROPERTY]: Extract Data of Response Body', PropertyService_1.name);
        var body = res.json();
        var propertyList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - PROPERTY]: ' + JSON.stringify(body), PropertyService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var property = body_1[_i];
            var tempProperty = new __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_property__["a" /* Property */](property.name, property.value);
            tempProperty = property;
            propertyList.push(tempProperty);
        }
        return propertyList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractProperty - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.extractProperty = function (res) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - PROPERTY]: Extract Data of Response Body', PropertyService_1.name);
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - PROPERTY]: ' + JSON.stringify(body), PropertyService_1.name);
        var property = new __WEBPACK_IMPORTED_MODULE_1__datamodels_metrics_property__["a" /* Property */](body.name, body.value);
        property = body;
        return property || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    PropertyService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return PropertyService;
}());
PropertyService = PropertyService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], PropertyService);

var PropertyService_1, _a;
//# sourceMappingURL=property.service.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_topnav_index__ = __webpack_require__(513);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modules_topnav_index__["a"]; });
/*********************************************************************************************************************************************************************************************************
 * This barrel file provides the exports for the shared resources (services, components).
 ********************************************************************************************************************************************************************************************************/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphnode_levelgraphnodemodule__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levelgraphrelation_levelgraphrelationmodule__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levelgrahdetails_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LevelGraphDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                     should be accessible in the LevelGraphDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function LevelGraphDetailsModule() {
    }
    return LevelGraphDetailsModule;
}());
LevelGraphDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__levelgraphnode_levelgraphnodemodule__["a" /* LevelGraphNodeModule */], __WEBPACK_IMPORTED_MODULE_1__levelgraphrelation_levelgraphrelationmodule__["a" /* LevelGraphRelationModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__levelgrahdetails_component__["a" /* LevelGraphDetailsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__levelgrahdetails_component__["a" /* LevelGraphDetailsComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                     should be accessible in the LevelGraphDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], LevelGraphDetailsModule);

//# sourceMappingURL=levelgraphdetails.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgrahdetails_component__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphDetailsRoutes; });

/********************************************************************************************************************************************************************************************************
 *
 * @route - LevelGraphDetailsRoutes - Path for the navigation to the RepositoryDetailsComponent
 *
 * @author - Arthur Kaul
 *
 *******************************************************************************************************************************************************************************************************/
var LevelGraphDetailsRoutes = [
    {
        path: 'levelgraph',
        component: __WEBPACK_IMPORTED_MODULE_0__levelgrahdetails_component__["a" /* LevelGraphDetailsComponent */]
    }
];
//# sourceMappingURL=levelgraphdetails.routes.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datamodels_levelgraph_level__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datamodels_levelgraph_levelgraph__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dataservices_levelgraph_level_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dataservices_exportxml_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// URL for XML Import
var URL_IMPORT = '/api/import/levelgraph';
// URL for XML Export
var URL_EXPORT = '/levelgraph';
var LevelGraphComponent = LevelGraphComponent_1 = (function () {
    function LevelGraphComponent(xmlExportSerivce, levelGraphService, levelService, flashMessageService) {
        this.xmlExportSerivce = xmlExportSerivce;
        this.levelGraphService = levelGraphService;
        this.levelService = levelService;
        this.flashMessageService = flashMessageService;
        this.levels = 3;
        this.levelGraphs = [];
        this.createdLevelGraph = new __WEBPACK_IMPORTED_MODULE_3__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
        this.editedLevelGraph = new __WEBPACK_IMPORTED_MODULE_3__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessage"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileUploader"]({});
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit is called when the component is initialized
     *
     ********************************************************************************************************************************************/
    LevelGraphComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphComponent', LevelGraphComponent_1.name);
        this.flashMessage.timeoutInMS = 4000;
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - createLevelGraph - Call the LevelGraphService for creating a new LevelGraph in the database and subscribe for a callback
     *
     * @param - numberOfLevels: number - Number of different levels in the LevelGraph
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphComponent.prototype.createLevelGraph = function (numberOfLevels) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create LevelGraph', LevelGraphComponent_1.name);
        this.levelGraphService.createLevelGraph(this.createdLevelGraph).subscribe(function (levelGraphResponse) {
            for (var i = 0; i < numberOfLevels; i++) {
                var tempLevel = new __WEBPACK_IMPORTED_MODULE_2__datamodels_levelgraph_level__["a" /* Level */]((i), (i * __WEBPACK_IMPORTED_MODULE_1__constants_constants__["a" /* Constants */].LEVELHEIGHT + i * __WEBPACK_IMPORTED_MODULE_1__constants_constants__["a" /* Constants */].LEVELGAPOFFSET), levelGraphResponse.id);
                tempLevel.levelGraph = levelGraphResponse;
                _this.levelService.createLevel(tempLevel)
                    .subscribe(function (levelResponse) {
                    levelGraphResponse.levels.push(levelResponse);
                    __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level was created sucessfully with id: ' + levelResponse.id, LevelGraphComponent_1.name);
                }, function (error) {
                    _this.flashMessage.message = error;
                    _this.flashMessage.isError = true;
                    _this.flashMessageService.display(_this.flashMessage);
                });
            }
            _this.levelGraphs.push(levelGraphResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('LevelGraph with name: ' + levelGraphResponse.name + ' was created sucessfully with id: ' + levelGraphResponse.id, LevelGraphComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveLevelGraphs - Call the LevelGraphService for loading all LevelGraphs from database into the application and subscribe
     *                                 for a callback. Currently no pagination/streaming of data is supported
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphComponent.prototype.retrieveLevelGraphs = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve LevelGraph Data', LevelGraphComponent_1.name);
        this.levelGraphService.getLevelGraphs()
            .subscribe(function (levelGraphsResponse) {
            _this.levelGraphs = levelGraphsResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graphs sucessfully retrieved.', LevelGraphComponent_1.name);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - updateLevelGraph - Call the LevelGraphService for updating the LevelGraph in the database and subscribe for a callback.
     *
     * @param name: string - New name of the Level Graph
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphComponent.prototype.updateLevelGraph = function (name) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Update LevelGraph', LevelGraphComponent_1.name);
        this.editedLevelGraph.name = name;
        this.levelGraphService.updateLevelGraph(this.editedLevelGraph)
            .subscribe(function (levelGraphResponse) {
            _this.levelGraphs = __WEBPACK_IMPORTED_MODULE_8__utility__["a" /* Utility */].updateElementInArry(levelGraphResponse, _this.levelGraphs);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph with id: ' + levelGraphResponse.id + ' and name:' + levelGraphResponse.name + ' was updated sucessfully.', LevelGraphComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method deleteLevelGraph - Call the LevelGraphService for delete a LevelGraph from the database and subscribe for a callback.
     *
     * @param id: number - ID of the LevelGraph witch should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphComponent.prototype.deleteLevelGraph = function (id) {
        var _this = this;
        this.levelGraphService.deleteLevelGraph(id)
            .subscribe(function (response) {
            _this.levelGraphs = __WEBPACK_IMPORTED_MODULE_8__utility__["a" /* Utility */].deleteElementFromArry(id, _this.levelGraphs);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph with id: ' + id + ' was deleted sucessfully.', LevelGraphComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - importLevelGraph - Call the ImportService for upload a XML file to the server component and import the data of the XML file
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphComponent.prototype.importLevelGraph = function () {
        var _this = this;
        this.uploader.setOptions({ url: URL_IMPORT });
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var levelGraph = new __WEBPACK_IMPORTED_MODULE_3__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
            levelGraph = JSON.parse(response);
            _this.levelGraphService.updateLevelGraph(levelGraph)
                .subscribe(function (levelGraphResponse) {
                _this.levelGraphs.push(levelGraphResponse);
                __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Level Graph with id: ' + levelGraphResponse.id + ' and name:' + levelGraphResponse.name + ' was updated sucessfully.', LevelGraphComponent_1.name);
            }, function (error) {
                _this.flashMessage.message = error;
                _this.flashMessage.isError = true;
                _this.flashMessageService.display(_this.flashMessage);
            });
        };
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - exportLevelGraph - Call the ExportService for retrieve a repository in XML data structure and export the data of the body as XML file to Client/Bowser
     *
     * @param - levelGraph: LevelGraph - LevelGraph which should be exported from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphComponent.prototype.exportLevelGraph = function (levelGraph) {
        var _this = this;
        this.xmlExportSerivce.getXmlFile(URL_EXPORT + '/' + levelGraph.id).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_10_file_saver__["saveAs"](res, levelGraph.name + '.xml');
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - setEditedLevelGraph - Set the editable LevelGraph Data
     * @param - repository - The levelGraph witch should be edit
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphComponent.prototype.setEditedLevelGraph = function (levelGraph) {
        this.editedLevelGraph = levelGraph;
    };
    LevelGraphComponent.prototype.addLevel = function () {
        this.levels++;
    };
    LevelGraphComponent.prototype.removeLevel = function () {
        if (this.levels > 2) {
            this.levels--;
        }
    };
    return LevelGraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LevelGraphComponent.prototype, "levelGraphs", void 0);
LevelGraphComponent = LevelGraphComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-levelgraph',
        template: __webpack_require__(754),
        styles: [__webpack_require__(687)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - LevelGraphComponent - Entry point for the LevelGraphModellerComponent and for select, create, delete, update or edit a Level Graph
     *
     * @fields - levels: number - Number of levels which should be created in the new LevelGraph
     * @fields - levelGraphs: LevelGraph[] - Array of all available LevelGraphs in the database
     * @fields - createdLevelGraph: LevelGraph - Level Graph which should be created
     * @fields - editedLevelGraph: LevelGraph - Level Graph which should be deleted
     * @fields - private flashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                  cause a "Over Flash" for the user experience
     *
     * @Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__dataservices_exportxml_service__["a" /* ExportXmlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__dataservices_exportxml_service__["a" /* ExportXmlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__dataservices_levelgraph_level_service__["a" /* LevelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__dataservices_levelgraph_level_service__["a" /* LevelService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], LevelGraphComponent);

var LevelGraphComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=levelgraph.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - LevelGraphService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for LevelGraph Data
 *
 *********************************************************************************************************************************************************************************************************/
var LevelGraphService = LevelGraphService_1 = (function () {
    function LevelGraphService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.levelGraphUrl = '/api/levelgraphs';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getLevelGraphs- Send GET all Level Graphs REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.getLevelGraphs = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPH]: Send GET Request Level Graphs', LevelGraphService_1.name);
        return this.http.get(this.levelGraphUrl).map(this.extractLevelGraphs).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getLevelGraph - Send GET Level Graph REQUEST
     *
     * @param - id: number - ID of the LevelGraph which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.getLevelGraph = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPH]: Send GET Request Level Graph with ID: ' + id, LevelGraphService_1.name);
        return this.http.get(this.levelGraphUrl + '/' + id)
            .map(this.extractLevelGraph)
            .catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createLevelGraph - Send POST Level Graph REQUEST
     *
     * @param - levelGraph: LevelGraph - LevelGraph which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.createLevelGraph = function (levelGraph) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPH]: Send POST Request Level Graph', LevelGraphService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVELGRAPH]: ' + JSON.stringify(levelGraph), LevelGraphService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.levelGraphUrl, levelGraph, options)
            .map(this.extractLevelGraph)
            .catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateLevelGraph - Send PUT Level Graph REQUEST
     *
     * @param - levelGraph: LevelGraph - LevelGraphRelation which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.updateLevelGraph = function (levelGraph) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPH]: Send PUT Request Level Graph', LevelGraphService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVELGRAPH]: ' + JSON.stringify(levelGraph), LevelGraphService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.levelGraphUrl + '/' + levelGraph.id, levelGraph, options)
            .map(this.extractLevelGraph)
            .catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteLevelGraph - Send DELETE Level Graph REQUEST
     *
     * @param - id: number - ID of the LevelGraph which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.deleteLevelGraph = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPH]: Send DELETE Request Level Graph', LevelGraphService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.levelGraphUrl + '/' + id, options)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractLevelGraphs - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.extractLevelGraphs = function (res) {
        var body = res.json();
        var levelGraphList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPH]: Extract Level Graph Data List', LevelGraphService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPH]: ' + JSON.stringify(body), LevelGraphService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var levelGraph = body_1[_i];
            var tempLevelGraph = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
            tempLevelGraph = levelGraph;
            levelGraphList.push(tempLevelGraph);
        }
        return levelGraphList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractLevelGraph -  Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.extractLevelGraph = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPH]: Extract Level Graph Data', LevelGraphService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPH]: ' + JSON.stringify(body), LevelGraphService_1.name);
        var levelGraph = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraph__["a" /* LevelGraph */]();
        levelGraph = body;
        return levelGraph || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return LevelGraphService;
}());
LevelGraphService = LevelGraphService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], LevelGraphService);

var LevelGraphService_1, _a;
//# sourceMappingURL=levelgraph.service.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralDataComponent = GeneralDataComponent_1 = (function () {
    function GeneralDataComponent() {
    }
    /********************************************************************************************************************************************************************************************************
    *
    * @method - ngOnInit - Is called when the component is initialized
    *
    *******************************************************************************************************************************************************************************************************/
    GeneralDataComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize GeneralDataComponent Component', GeneralDataComponent_1.name);
    };
    return GeneralDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__["a" /* LevelGraphNode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__["a" /* LevelGraphNode */]) === "function" && _a || Object)
], GeneralDataComponent.prototype, "currentLevelGraphNode", void 0);
GeneralDataComponent = GeneralDataComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-generaldata',
        template: __webpack_require__(756),
        styles: [__webpack_require__(689)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - GeneralDataComponent Class - The component displays the general data of a LevelGraphNode Object.
     *
     * @field - currentLevelGraphNode: LevelGraphNode -  LevelGraphNode which is currently selected
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], GeneralDataComponent);

var GeneralDataComponent_1, _a;
//# sourceMappingURL=generaldata.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphrelation_levelgraphrelationmodule__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metrics_property_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generaldata_generaldata_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levelgraphnodedetails_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNodeDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LevelGraphNodeDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphNodeDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                       should be accessible in the LevelGraphNodeDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function LevelGraphNodeDetailsModule() {
    }
    return LevelGraphNodeDetailsModule;
}());
LevelGraphNodeDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__metrics_property_module__["a" /* PropertyModule */],
            __WEBPACK_IMPORTED_MODULE_0__levelgraphrelation_levelgraphrelationmodule__["a" /* LevelGraphRelationModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__levelgraphnodedetails_component__["a" /* LevelGraphNodeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_2__generaldata_generaldata_component__["a" /* GeneralDataComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__levelgraphnodedetails_component__["a" /* LevelGraphNodeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_2__generaldata_generaldata_component__["a" /* GeneralDataComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphNodeDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                       should be accessible in the LevelGraphNodeDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], LevelGraphNodeDetailsModule);

//# sourceMappingURL=levelgraphnodedetailsmodule.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphnodedetails_component__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNodeDetailsRoutes; });

/**********************************************************************************************************************************************************************************************************
 *
 * @route - LevelGraphNodeDetailsRoutes - Path for the navigation to the LevelGraphNodeDetailsRoutes
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var LevelGraphNodeDetailsRoutes = [
    {
        path: 'levelgraphnodedetails',
        component: __WEBPACK_IMPORTED_MODULE_0__levelgraphnodedetails_component__["a" /* LevelGraphNodeDetailsComponent */]
    }
];
//# sourceMappingURL=levelgraphnodedetailsroutes.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphnode_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levelgraphnodedetails_levelgraphnodedetailsmodule__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNodeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LevelGraphNodeModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphNodeModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the LevelGraphNodeModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function LevelGraphNodeModule() {
    }
    return LevelGraphNodeModule;
}());
LevelGraphNodeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__levelgraphnodedetails_levelgraphnodedetailsmodule__["a" /* LevelGraphNodeDetailsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__levelgraphnode_component__["a" /* LevelGraphNodeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__levelgraphnode_component__["a" /* LevelGraphNodeComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphNodeModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the LevelGraphNodeModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], LevelGraphNodeModule);

//# sourceMappingURL=levelgraphnodemodule.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LevelGraphRelationComponent = LevelGraphRelationComponent_1 = (function () {
    function LevelGraphRelationComponent() {
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphRelationComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphRelationComponent', LevelGraphRelationComponent_1.name);
    };
    return LevelGraphRelationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LevelGraphRelationComponent.prototype, "currentLevelGraphRelations", void 0);
LevelGraphRelationComponent = LevelGraphRelationComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-levelgraphrelation',
        template: __webpack_require__(758),
        styles: [__webpack_require__(691)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - LevelGraphRelationComponent - Lazy loaded component as wrapper for all other components in the LevelGraphRelationComponent
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], LevelGraphRelationComponent);

var LevelGraphRelationComponent_1;
//# sourceMappingURL=levelgraphrelation.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralDataComponent = GeneralDataComponent_1 = (function () {
    function GeneralDataComponent() {
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    GeneralDataComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize GeneralDataComponent Component', GeneralDataComponent_1.name);
    };
    return GeneralDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__["a" /* LevelGraphRelation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphrelation__["a" /* LevelGraphRelation */]) === "function" && _a || Object)
], GeneralDataComponent.prototype, "currentLevelGraphRelation", void 0);
GeneralDataComponent = GeneralDataComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-generaldata',
        template: __webpack_require__(759),
        styles: [__webpack_require__(692)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - GeneralDataComponent Class - The component displays the general data of a LevelGraphRelation Object.
     *
     * @field - currentLevelGraphRelation: LevelGraphRelation -  LevelGraphRelation which is currently selected
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], GeneralDataComponent);

var GeneralDataComponent_1, _a;
//# sourceMappingURL=generaldata.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metrics_property_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levelgraphrelationdetails_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelationDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LevelGraphRelationDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphRelationDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                             should be accessible in the LevelGraphRelationDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function LevelGraphRelationDetailsModule() {
    }
    return LevelGraphRelationDetailsModule;
}());
LevelGraphRelationDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_0__metrics_property_module__["a" /* PropertyModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__levelgraphrelationdetails_component__["a" /* LevelGraphRelationDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__levelgraphrelationdetails_component__["a" /* LevelGraphRelationDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - LevelGraphRelationDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                             should be accessible in the LevelGraphRelationDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], LevelGraphRelationDetailsModule);

//# sourceMappingURL=levelgraphrelationdetails.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levelgraphrelationdetails_component__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelationDetailsRoutes; });

/**********************************************************************************************************************************************************************************************************
 *
 * @route - LevelGraphRelationDetailsRoutes - Path for the navigation to the LevelGraphRelationDetailsRoutes
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var LevelGraphRelationDetailsRoutes = [
    {
        path: 'levelgraphrelationdetails',
        component: __WEBPACK_IMPORTED_MODULE_0__levelgraphrelationdetails_component__["a" /* LevelGraphRelationDetailsComponent */]
    }
];
//# sourceMappingURL=levelgraphrelationdetailsroutes.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datamodels_entity_entity__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datamodels_metrics_expectedproperty__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataservices_metrics_expectedproperty_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dataservices_types_relationshiptype_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpectedPropertyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExpectedPropertyComponent = ExpectedPropertyComponent_1 = (function () {
    function ExpectedPropertyComponent(relationshipTypeService, expectedPropertyService, flashMessageService) {
        this.relationshipTypeService = relationshipTypeService;
        this.expectedPropertyService = expectedPropertyService;
        this.flashMessageService = flashMessageService;
        this.createdExpectedProperty = new __WEBPACK_IMPORTED_MODULE_3__datamodels_metrics_expectedproperty__["a" /* ExpectedProperty */]('Unnamed', 'Undefined');
        this.editExpectedProperty = new __WEBPACK_IMPORTED_MODULE_3__datamodels_metrics_expectedproperty__["a" /* ExpectedProperty */]('Unnamed', 'Undefined');
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize ExpectedPropertyComponent', ExpectedPropertyComponent_1.name);
        this.flashMessage.timeoutInMS = 4000;
        this.createdExpectedProperty.entityExpected = this.entity;
        this.createdExpectedProperty.entityExpectedId = this.entity.id;
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - createExpectedProperty - Call the ExpectedPropertyService for creating a new ExpectedProperty in the database
     *                                    and subscribe for a callback
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyComponent.prototype.createExpectedProperty = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create ExpectedProperty', ExpectedPropertyComponent_1.name);
        this.expectedPropertyService.createExpectedProperty(this.createdExpectedProperty).subscribe(function (responseExpectedProperty) {
            _this.entity.expectedProperties.push(responseExpectedProperty);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - updateExpectedProperty - Call the ExpectedPropertyService for updating the ExpectedProperty in the database and subscribe for a callback.
     *
     * @param - name: string - New name of the ExpectedProperty
     * @param - value: string - New value of the ExpectedProperty
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyComponent.prototype.updateExpectedProperty = function (name, value) {
        var _this = this;
        this.editExpectedProperty.name = name;
        this.editExpectedProperty.value = value;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Update ExpectedProperty', ExpectedPropertyComponent_1.name);
        this.expectedPropertyService.updateExpectedProperty(this.editExpectedProperty).subscribe(function (responseExpectedProperty) {
            _this.entity.expectedProperties = __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* Utility */].updateElementInArry(responseExpectedProperty, _this.entity.expectedProperties);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - deleteExpectedProperty - Call the ExpectedPropertyService for delete a ExpectedProperty from the database and subscribe for a callback.
     *
     * @param - id: number - ID of the ExpectedProperty witch should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyComponent.prototype.deleteExpectedProperty = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete ExpectedProperty', ExpectedPropertyComponent_1.name);
        this.expectedPropertyService.deleteExpectedProperty(id).subscribe(function (response) {
            _this.entity.expectedProperties = __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* Utility */].updateElementInArry(id, _this.entity.expectedProperties);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - setExpectedProperty - Set the editable ExpectedProperty Data
     * @param - expectedProperty: ExpectedProperty - The ExpectedProperty witch should be edit
     *
     *******************************************************************************************************************************************************************************************************/
    ExpectedPropertyComponent.prototype.setExpectedProperty = function (expectedProperty) {
        this.editExpectedProperty = expectedProperty;
    };
    return ExpectedPropertyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__datamodels_entity_entity__["a" /* Entity */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__datamodels_entity_entity__["a" /* Entity */]) === "function" && _a || Object)
], ExpectedPropertyComponent.prototype, "entity", void 0);
ExpectedPropertyComponent = ExpectedPropertyComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-expectedproperty',
        template: __webpack_require__(761),
        styles: [__webpack_require__(694)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - ExpectedPropertyComponent - The component retrieve all available ExpectedProperty of the currently selected Entity
     *                                          from the database and list them. You can create, delete or edit the ExpectedProperty.
     *
     * @field/@input - entity: Entity -  Parent of the ExpectedProperty
     * @field - createdExpectedProperty: ExpectedProperty - ExpectedProperty which should be created
     * @field - editExpectedProperty: ExpectedProperty - ProvidedProperty which should be edit
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                     cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__dataservices_metrics_expectedproperty_service__["a" /* ExpectedPropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dataservices_metrics_expectedproperty_service__["a" /* ExpectedPropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], ExpectedPropertyComponent);

var ExpectedPropertyComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=expectedproperty.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datamodels_entity_entity__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datamodels_metrics_providedproperty__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataservices_metrics_providedpropertyservice_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dataservices_types_relationshiptype_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidedPropertyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProvidedPropertyComponent = ProvidedPropertyComponent_1 = (function () {
    function ProvidedPropertyComponent(relationshipTypeService, providedPropertyService, flashMessageService) {
        this.relationshipTypeService = relationshipTypeService;
        this.providedPropertyService = providedPropertyService;
        this.flashMessageService = flashMessageService;
        this.createdProvidedProperty = new __WEBPACK_IMPORTED_MODULE_3__datamodels_metrics_providedproperty__["a" /* ProvidedProperty */]('Unnamed', 'Undefined');
        this.editProvidedProperty = new __WEBPACK_IMPORTED_MODULE_3__datamodels_metrics_providedproperty__["a" /* ProvidedProperty */]('Unnamed', 'Undefined');
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize ProvidedPropertyComponent', ProvidedPropertyComponent_1.name);
        this.flashMessage.timeoutInMS = 4000;
        this.createdProvidedProperty.entityProvided = this.entity;
        this.createdProvidedProperty.entityProvidedId = this.entity.id;
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - createProvidedProperty - Call the ProvidedPropertyService for creating a new ProvidedProperty in the database
     *                                    and subscribe for a callback
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyComponent.prototype.createProvidedProperty = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create ProvidedProperty', ProvidedPropertyComponent_1.name);
        this.providedPropertyService.createProvidedProperty(this.createdProvidedProperty).subscribe(function (responseProperty) {
            _this.entity.providedProperties.push(responseProperty);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - updateProvidedProperty - Call the ProvidedPropertyService for updating the ProvidedProperty in the database and subscribe for a callback.
     *
     * @param - name: string - New name of the ProvidedProperty
     * @param - value: string - New name of the ProvidedProperty
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyComponent.prototype.updateProvidedProperty = function (name, value) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Update ProvidedProperty', ProvidedPropertyComponent_1.name);
        this.editProvidedProperty.name = name;
        this.editProvidedProperty.value = value;
        this.providedPropertyService.updateProvidedProperty(this.editProvidedProperty).subscribe(function (responseProperty) {
            _this.entity.providedProperties = __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* Utility */].updateElementInArry(responseProperty, _this.entity.providedProperties);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - deleteProvidedProperty - Call the ProvidedPropertyService for delete a ProvidedProperty from the database and subscribe for a callback.
     *
     * @param - id: number - ID of the ProvidedProperty witch should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyComponent.prototype.deleteProvidedProperty = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete ProvidedProperty', ProvidedPropertyComponent_1.name);
        this.providedPropertyService.deleteProvidedProperty(id).subscribe(function (response) {
            _this.entity.providedProperties = __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* Utility */].deleteElementFromArry(id, _this.entity.providedProperties);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - setProvidedProperty- Set the editable ProvidedProperty Data
     * @param - providedProperty: ProvidedProperty - The ProvidedProperty witch should be edit
     *
     *******************************************************************************************************************************************************************************************************/
    ProvidedPropertyComponent.prototype.setProvidedProperty = function (providedProperty) {
        this.editProvidedProperty = providedProperty;
    };
    return ProvidedPropertyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__datamodels_entity_entity__["a" /* Entity */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__datamodels_entity_entity__["a" /* Entity */]) === "function" && _a || Object)
], ProvidedPropertyComponent.prototype, "entity", void 0);
ProvidedPropertyComponent = ProvidedPropertyComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-providedproperty',
        template: __webpack_require__(762),
        styles: [__webpack_require__(695)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component ProvidedPropertyComponent Class - The component retrieve all available ProvidedProperty of the currently selected Entity
     *                                              from the database and list them. You can create, delete or edit the ProvidedProperty.
     *
     * @field/@input - entity: Entity -  Parent of the Property
     * @field - createdProvidedProperty: ProvidedProperty - ProvidedProperty which should be created
     * @field - editProvidedProperty: ProvidedProperty - ProvidedProperty which should be edit
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__dataservices_metrics_providedpropertyservice_service__["a" /* ProvidedPropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dataservices_metrics_providedpropertyservice_service__["a" /* ProvidedPropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"]) === "function" && _d || Object])
], ProvidedPropertyComponent);

var ProvidedPropertyComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=providedproperty.component.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/*********************************************************************************************************************************************************************************************************
 *
 * @class - Logger - Helper class for customized logging
 *
 * @hint - Further improvement write a log file to the file system and improve the representation of JSON Objects in the console currently only displayed as string
 *
 * @author Arthur Kaul
 *
 ********************************************************************************************************************************************************************************************************/
var Logger = (function () {
    function Logger() {
    }
    /*******************************************************************************************************************************************************************************************************
     *
     * @method data - Logger for data objects
     *
     * @param - msg: string - String which should be written to log
     * @param - className: any - Name of the class where the Logger was called
     *
     ******************************************************************************************************************************************************************************************************/
    Logger.data = function (msg, className) {
        console.log('[DATA] ' + className + '  [Message:]  ' + msg);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method data - Logger for info messages
     *
     * @param - msg: string - String which should be written to log
     * @param - className: any - Name of the class where the Logger was called
     *
     ******************************************************************************************************************************************************************************************************/
    Logger.info = function (msg, className) {
        console.log('[INFO] ' + className + '  [Message:]  ' + msg);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method warning - Logger for warning messages
     *
     * @param - msg: string - String which should be written to log
     * @param - className: any - Name of the class where the Logger was called
     *
     ******************************************************************************************************************************************************************************************************/
    Logger.warning = function (msg, className) {
        console.warn('[WARNING] ' + className + '  [Message:]  ' + msg);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @method error - Logger for error messages
     *
     * @param - msg: string - String which should be written to log
     * @param - className: any - Name of the class where the Logger was called
     *
     ******************************************************************************************************************************************************************************************************/
    Logger.error = function (msg, className) {
        console.error('[ERROR] ' + className + '  [Message:]  ' + msg);
    };
    return Logger;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levelgraphnode_levelgraphnode_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NodeTemplateComponent = (function () {
    function NodeTemplateComponent() {
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTemplateComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphNodeComponent', __WEBPACK_IMPORTED_MODULE_2__levelgraphnode_levelgraphnode_component__["a" /* LevelGraphNodeComponent */].name);
    };
    return NodeTemplateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]) === "function" && _a || Object)
], NodeTemplateComponent.prototype, "currentTopologyTemplate", void 0);
NodeTemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-nodetemplate',
        template: __webpack_require__(763),
        styles: [__webpack_require__(696)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - NodeTemplateComponent - Lazy loaded component as wrapper for all other components in the NodeTemplateComponent
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], NodeTemplateComponent);

var _a;
//# sourceMappingURL=nodetemplate.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodetemplate_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodetemplatedetails_nodetemplatedetails_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTemplateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NodeTemplateModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTemplateModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the NodeTemplateModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function NodeTemplateModule() {
    }
    return NodeTemplateModule;
}());
NodeTemplateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__nodetemplatedetails_nodetemplatedetails_module__["a" /* NodeTemplateDetailsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__nodetemplate_component__["a" /* NodeTemplateComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__nodetemplate_component__["a" /* NodeTemplateComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTemplateModule - Lazy loaded module as wrapper for all application modules and components which should be accessible in the NodeTemplateModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], NodeTemplateModule);

//# sourceMappingURL=nodetemplate.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralDataComponent = GeneralDataComponent_1 = (function () {
    function GeneralDataComponent() {
    }
    /********************************************************************************************************************************************************************************************************
    *
    * @method - ngOnInit - Is called when the component is initialized
    *
    *******************************************************************************************************************************************************************************************************/
    GeneralDataComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize GeneralDataComponent Component', GeneralDataComponent_1.name);
    };
    return GeneralDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__["a" /* NodeTemplate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_nodetemplate__["a" /* NodeTemplate */]) === "function" && _a || Object)
], GeneralDataComponent.prototype, "currentNodeTemplate", void 0);
GeneralDataComponent = GeneralDataComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-generaldata',
        template: __webpack_require__(764),
        styles: [__webpack_require__(697)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - GeneralDataComponent Class - The component displays the general data of a NodeTemplate Object.
     *
     * @field - currentNodeTemplate: NodeTemplate -  NodeTemplate which is currently selected
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], GeneralDataComponent);

var GeneralDataComponent_1, _a;
//# sourceMappingURL=generaldata.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metrics_property_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relationshiptemplate_relationshiptemplate_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generaldata_generaldata_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nodetemplatedetails_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTemplateDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NodeTemplateDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTemplateDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                       should be accessible in the NodeTemplateDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function NodeTemplateDetailsModule() {
    }
    return NodeTemplateDetailsModule;
}());
NodeTemplateDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_0__metrics_property_module__["a" /* PropertyModule */],
            __WEBPACK_IMPORTED_MODULE_1__relationshiptemplate_relationshiptemplate_module__["a" /* RelationshipTemplateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__nodetemplatedetails_component__["a" /* NodeTemplateDetailsComponent */], __WEBPACK_IMPORTED_MODULE_2__generaldata_generaldata_component__["a" /* GeneralDataComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__nodetemplatedetails_component__["a" /* NodeTemplateDetailsComponent */], __WEBPACK_IMPORTED_MODULE_2__generaldata_generaldata_component__["a" /* GeneralDataComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - NodeTemplateDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                       should be accessible in the NodeTemplateDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], NodeTemplateDetailsModule);

//# sourceMappingURL=nodetemplatedetails.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodetemplatedetails_component__ = __webpack_require__(207);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTemplateDetailsRoutes; });

/**********************************************************************************************************************************************************************************************************
 *
 * @route - NodeTemplateDetailsRoutes - Path for the navigation to the NodeTemplateDetailsRoutes
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var NodeTemplateDetailsRoutes = [
    {
        path: 'nodetemplatedetails',
        component: __WEBPACK_IMPORTED_MODULE_0__nodetemplatedetails_component__["a" /* NodeTemplateDetailsComponent */]
    }
];
//# sourceMappingURL=nodetemplatedetails.routes.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RelationshipTemplateComponent = RelationshipTemplateComponent_1 = (function () {
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    function RelationshipTemplateComponent() {
    }
    RelationshipTemplateComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize LevelGraphNodeComponent', RelationshipTemplateComponent_1.name);
    };
    return RelationshipTemplateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RelationshipTemplateComponent.prototype, "currentRelationshipTemplates", void 0);
RelationshipTemplateComponent = RelationshipTemplateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-relationshiptemplate',
        template: __webpack_require__(766),
        styles: [__webpack_require__(699)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - RelationshipTemplateComponent - Lazy loaded component as wrapper for all other components in the RelationshipTemplateComponent
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], RelationshipTemplateComponent);

var RelationshipTemplateComponent_1;
//# sourceMappingURL=relationshiptemplate.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralDataComponent = GeneralDataComponent_1 = (function () {
    function GeneralDataComponent() {
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    GeneralDataComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize GeneralDataComponent Component', GeneralDataComponent_1.name);
    };
    return GeneralDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_relationshiptemplate__["a" /* RelationshipTemplate */]) === "function" && _a || Object)
], GeneralDataComponent.prototype, "currentRelationshipTemplate", void 0);
GeneralDataComponent = GeneralDataComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-generaldata',
        template: __webpack_require__(767),
        styles: [__webpack_require__(700)]
    })
    /**********************************************************************************************************************************************************************************************************
    *
    * @component - GeneralDataComponent Class - The component displays the general data of a LevelGraphRelation Object.
    *
    * @field - currentLevelGraphRelation: LevelGraphRelation -  LevelGraphRelation which is currently selected
    *
    * @author - Arthur Kaul
    *
    *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], GeneralDataComponent);

var GeneralDataComponent_1, _a;
//# sourceMappingURL=generaldata.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metrics_property_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relationshiptemplatedetails_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTemplateDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RelationshipTemplateDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTemplateDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                               should be accessible in the RelationshipTemplateDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function RelationshipTemplateDetailsModule() {
    }
    return RelationshipTemplateDetailsModule;
}());
RelationshipTemplateDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_0__metrics_property_module__["a" /* PropertyModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__relationshiptemplatedetails_component__["a" /* RelationshipTemplateDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__relationshiptemplatedetails_component__["a" /* RelationshipTemplateDetailsComponent */], __WEBPACK_IMPORTED_MODULE_1__generaldata_generaldata_component__["a" /* GeneralDataComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RelationshipTemplateDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                               should be accessible in the RelationshipTemplateDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], RelationshipTemplateDetailsModule);

//# sourceMappingURL=relationshiptemplatedetails.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relationshiptemplatedetails_component__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTemplateDetailsRoutes; });

/**********************************************************************************************************************************************************************************************************
 *
 * @route - RelationshipTemplateDetailsRoutes - Path for the navigation to the RelationshipTemplateDetailsRoutes
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var RelationshipTemplateDetailsRoutes = [
    {
        path: 'relationshiptemplatedetails',
        component: __WEBPACK_IMPORTED_MODULE_0__relationshiptemplatedetails_component__["a" /* RelationshipTemplateDetailsComponent */]
    }
];
//# sourceMappingURL=relationshiptemplatedetails.routes.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_repository_repository_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dataservices_exportxml_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// URL for XML Import
var URL_IMPORT = '/api/import/repository';
// URL for XML Export
var URL_EXPORT = '/repository';
var RepositoryComponent = RepositoryComponent_1 = (function () {
    function RepositoryComponent(xmlExportSerivce, repositoryService, flashMessageService) {
        this.xmlExportSerivce = xmlExportSerivce;
        this.repositoryService = repositoryService;
        this.flashMessageService = flashMessageService;
        this.repositories = [];
        this.createdRepository = new __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]();
        this.editedRepository = new __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessage"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__["FileUploader"]({});
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Initialize Repository Component', RepositoryComponent_1.name);
        this.flashMessage.timeoutInMS = __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* Constants */].FLASHMESSAGETIMEOUT;
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - createRepository - Call the RepositoryService for creating a new Repository in the database and subscribe for a callback
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.createRepository = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create Repository', RepositoryComponent_1.name);
        this.repositoryService.createRepository(this.createdRepository)
            .subscribe(function (repositoryResponse) {
            _this.repositories.push(repositoryResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repository with name: ' + repositoryResponse.name + ' was created sucessfully with id: ' + repositoryResponse.id, RepositoryComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - retrieveRepositories - Call the RepositoryService for loading all repositories from database into the application and subscribe
     *                                  for a callback. Currently no pagination/streaming of data is supported
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.retrieveRepositories = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve Repository Data', RepositoryComponent_1.name);
        this.repositoryService.getRepositories()
            .subscribe(function (repositoriesResponse) {
            _this.repositories = repositoriesResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repositories sucessfully retrieved.', RepositoryComponent_1.name);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - updateRepository - Call the RepositoryService for updating the repository in the database and subscribe for a callback.
     *
     * @param - name: string - New name of the Repository
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.updateRepository = function (name) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Update Repository', RepositoryComponent_1.name);
        this.editedRepository.name = name;
        this.repositoryService.updateRepository(this.editedRepository)
            .subscribe(function (repositoryResponse) {
            _this.repositories = __WEBPACK_IMPORTED_MODULE_3__utility__["a" /* Utility */].updateElementInArry(repositoryResponse, _this.repositories);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repository with id: ' + repositoryResponse.id + ' and name:' + repositoryResponse.name + ' was updated sucessfully.', RepositoryComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - deleteRepository - Call the RepositoryService for delete a repository from the database and subscribe for a callback.
     *
     * @param - id: number - ID of the repository witch should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.deleteRepository = function (id, event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete Repository', RepositoryComponent_1.name);
        this.repositoryService.deleteRepository(id)
            .subscribe(function (repositoryResponse) {
            _this.repositories = __WEBPACK_IMPORTED_MODULE_3__utility__["a" /* Utility */].deleteElementFromArryS(id, _this.repositories);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Repository with id: ' + id + ' was deleted sucessfully.', RepositoryComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - importRepository - Call the ImportService for upload a XML file to the server component and import the data of the XML file
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.importRepository = function () {
        var _this = this;
        this.uploader.setOptions({ url: URL_IMPORT });
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var rep = new __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]();
            rep = JSON.parse(response);
            _this.repositories.push(rep);
        };
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - exportRepository - Call the ExportService for retrieve a repository in XML data structure and export the data of the body as XML file to Client/Bowser
     *
     * @param - repository: Repository - Repository which should be exported from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.exportRepository = function (repository) {
        var _this = this;
        this.xmlExportSerivce.getXmlFile(URL_EXPORT + '/' + repository.id).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_8_file_saver__["saveAs"](res, repository.name + '.xml');
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - setEditRepositoryData - Set the edit Repository Data
     *
     * @param - repository - The repository witch should be edit
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryComponent.prototype.setEditRepositoryData = function (repository) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Set Edit Repository Data', RepositoryComponent_1.name);
        this.editedRepository = repository;
    };
    return RepositoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RepositoryComponent.prototype, "repositories", void 0);
RepositoryComponent = RepositoryComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-repository',
        template: __webpack_require__(769),
        styles: [__webpack_require__(702)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - RepositoryComponent Class - The component retrieve all available repositories in the database and list them. You can
     *                                          delete, import, export or edit the repository. Also you can select a repository and
     *                                          call the RepositoryDetailComponent where you can see all data which are included in a repository.
     *
     * @field - repositories: Repository[] - List of all available Repositories in the database
     * @field - createdRepository: Repository -  Repository which should be created
     * @field - editedRepository: Repository - Repository which should be edit
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__dataservices_exportxml_service__["a" /* ExportXmlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__dataservices_exportxml_service__["a" /* ExportXmlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_repository_repository_service__["a" /* RepositoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_repository_repository_service__["a" /* RepositoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"]) === "function" && _c || Object])
], RepositoryComponent);

var RepositoryComponent_1, _a, _b, _c;
//# sourceMappingURL=repository.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_nodetype_nodetypemodule__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_relationshiptype_relationshiptypemodule__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repositorydetails_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RepositoryDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RepositoryDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                     should be accessible in the RepositoryDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function RepositoryDetailsModule() {
    }
    return RepositoryDetailsModule;
}());
RepositoryDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__types_nodetype_nodetypemodule__["a" /* NodeTypeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__types_relationshiptype_relationshiptypemodule__["a" /* RelationshipTypeModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__repositorydetails_component__["a" /* RepositoryDetailsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__repositorydetails_component__["a" /* RepositoryDetailsComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RepositoryDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                     should be accessible in the RepositoryDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], RepositoryDetailsModule);

//# sourceMappingURL=repositorydetails.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repositorydetails_component__ = __webpack_require__(210);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryDetailsRoutes; });

/**********************************************************************************************************************************************************************************************************
 *
 * @route - RepositoryDetailsRoutes - Path for the navigation to the RepositoryDetailsComponent
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var RepositoryDetailsRoutes = [
    {
        path: 'repository',
        component: __WEBPACK_IMPORTED_MODULE_0__repositorydetails_component__["a" /* RepositoryDetailsComponent */]
    }
];
//# sourceMappingURL=repositorydetails.routes.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repository_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositorydetails_repositorydetails_module__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RepositoryModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RepositoryModule - Lazy loaded module as wrapper for all application modules and components which
     *                              should be accessible in the RepositoryModule, you can import this module in other
     *                              modules where you need to display the repository view for create, update, delete
     *                              or view repositories
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function RepositoryModule() {
    }
    return RepositoryModule;
}());
RepositoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__repositorydetails_repositorydetails_module__["a" /* RepositoryDetailsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__repository_component__["a" /* RepositoryComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__repository_component__["a" /* RepositoryComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - RepositoryModule - Lazy loaded module as wrapper for all application modules and components which
     *                              should be accessible in the RepositoryModule, you can import this module in other
     *                              modules where you need to display the repository view for create, update, delete
     *                              or view repositories
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], RepositoryModule);

//# sourceMappingURL=repositorymodule.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav__ = __webpack_require__(514);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__topnav__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.changeTheme = function (color) {
        var link = $('<link>');
        link
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet' })
            .attr('href', 'themes/app-' + color + '.css');
    };
    TopNavComponent.prototype.rtl = function () {
        var body = $('body');
        body.toggleClass('rtl');
    };
    TopNavComponent.prototype.sidebarToggler = function () {
        var sidebar = $('#sidebar');
        var mainContainer = $('.main-container');
        sidebar.toggleClass('sidebar-left-zero');
        mainContainer.toggleClass('main-container-ml-zero');
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-nav',
        template: __webpack_require__(771),
    })
], TopNavComponent);

//# sourceMappingURL=topnav.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraph_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataservices_topologytemplate_topologytemplate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dataservices_exportxml_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var URL_IMPORT = '/api/import/topologytemplate';
// URL for XML Export
var URL_EXPORT = '/topologytemplate';
var TopologyTemplateComponent = TopologyTemplateComponent_1 = (function () {
    function TopologyTemplateComponent(xmlExportSerivce, flashMessageService, topologyTemplateService, levelGraphService) {
        this.xmlExportSerivce = xmlExportSerivce;
        this.flashMessageService = flashMessageService;
        this.topologyTemplateService = topologyTemplateService;
        this.levelGraphService = levelGraphService;
        this.topologyTemplates = [];
        this.createdTopologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
        this.editTopologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessage"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploader"]({});
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Initialize TopologyTemplateComponent', TopologyTemplateComponent_1.name);
        this.flashMessage.timeoutInMS = 4000;
    };
    /********************************************************************************************************************************************************************************************************
     *
     *  @method - createTopologyTemplate - Call the TopologyTemplateService for creating a new TopologyTemplate in the database
     *                                     and subscribe for a callback
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.createTopologyTemplate = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create TopologyTemplate', TopologyTemplateComponent_1.name);
        this.createdTopologyTemplate.abstractionLevel = 0;
        this.topologyTemplateService.createTopologyTemplate(this.createdTopologyTemplate)
            .subscribe(function (topologyTemplateResponse) {
            _this.topologyTemplates.push(topologyTemplateResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('TopologyTemplate with name: ' + topologyTemplateResponse.name + ' was created sucessfully with id: ' + topologyTemplateResponse.id, TopologyTemplateComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     *  @method - retrieveTopologyTemplates - Call the TopologyTemplateService for loading all TopologyTemplates from database into the application
     *                                        and subscribe for a callback. Currently no pagination/streaming of data is supported
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.retrieveTopologyTemplates = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Retrieve TopologyTemplate Data', TopologyTemplateComponent_1.name);
        this.topologyTemplateService.getTopologyTemplates()
            .subscribe(function (topologyTemplateResponse) {
            _this.topologyTemplates = topologyTemplateResponse;
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Topology Template sucessfully retrieved.', TopologyTemplateComponent_1.name);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - updateTopologyTemplate - Call the TopologyTemplateService for updating the repository in the database and subscribe for a callback.
     *
     * @param - name: string - New name of the TopologyTemplate
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.updateTopologyTemplate = function (name) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Update TopologyTemplate', TopologyTemplateComponent_1.name);
        this.editTopologyTemplate.name = name;
        this.topologyTemplateService.updateTopologyTemplate(this.editTopologyTemplate)
            .subscribe(function (topologyTemplateResponse) {
            _this.topologyTemplates = __WEBPACK_IMPORTED_MODULE_5__utility__["a" /* Utility */].updateElementInArry(topologyTemplateResponse, _this.topologyTemplates);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Topology Template with id: ' + topologyTemplateResponse.id + ' and name:' + topologyTemplateResponse.name + ' was updated sucessfully.', TopologyTemplateComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - deleteTopologyTemplate - Call the TopologyTemplateService for delete a TopologyTemplate from the database and subscribe for a callback.
     *
     * @param - id: number - ID of the TopologyTemplate witch should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.deleteTopologyTemplate = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete TopologyTemplate', TopologyTemplateComponent_1.name);
        this.topologyTemplateService.deleteTopologyTemplate(id)
            .subscribe(function (topologyTemplateResponse) {
            _this.topologyTemplates = __WEBPACK_IMPORTED_MODULE_5__utility__["a" /* Utility */].deleteElementFromArry(id, _this.topologyTemplates);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Topology Template with id: ' + id + ' was deleted sucessfully.', TopologyTemplateComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - importRepository - Call the ImportService for upload a XML file to the server component and import the data of the XML file
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.importTopologyTemplate = function () {
        var _this = this;
        this.uploader.setOptions({ url: URL_IMPORT });
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var topologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
            topologyTemplate = JSON.parse(response);
            _this.topologyTemplateService.updateTopologyTemplate(topologyTemplate)
                .subscribe(function (topologyTemplateResponse) {
                _this.topologyTemplates.push(topologyTemplateResponse);
                __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Topology Template with id: ' + topologyTemplateResponse.id + ' and name:' + topologyTemplateResponse.name + ' was updated sucessfully.', TopologyTemplateComponent_1.name);
            }, function (error) {
                _this.flashMessage.message = error;
                _this.flashMessage.isError = true;
                _this.flashMessageService.display(_this.flashMessage);
            });
        };
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - exportRepository - Call the ExportService for retrieve a repository in XML data structure and export the data of the body as XML file to Client/Bowser
     *
     * @param - repository: Repository - Repository which should be exported from the database
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.exportTopologyTemplate = function (topologyTemplate) {
        var _this = this;
        this.xmlExportSerivce.getXmlFile(URL_EXPORT + '/' + topologyTemplate.id).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"](res, topologyTemplate.name + '.xml');
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * Set the editable TopologyTemplate Data
     * @param - topologyTemplate: TopologyTemplate - The TopologyTemplate witch should be edit
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateComponent.prototype.setEditTopologyTemplate = function (topologyTemplate) {
        this.editTopologyTemplate = topologyTemplate;
    };
    return TopologyTemplateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TopologyTemplateComponent.prototype, "topologyTemplates", void 0);
TopologyTemplateComponent = TopologyTemplateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-topologytemplate',
        template: __webpack_require__(772),
        styles: [__webpack_require__(704)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - TopologyTemplateComponent - The component retrieve all available TopologyTemplates in the database and list them. You can
     *                                          delete, import, export or edit the TopologyTemplate. Also you can select a TopologyTemplate and
     *                                          call the TopologyTemplateDetailComponent where you can see all data which are included in a
     *                                          TopologyTemplate.
     *
     * @fields - topologyTemplates: TopologyTemplate[] - List of all available TopologyTemplates in the database
     * @fields - createdTopologyTemplate: TopologyTemplate - TopologyTemplate which should be created
     * @fields - editTopologyTemplate: TopologyTemplate - TopologyTemplate which should be edit
     * @fields - flashMessage = new FlashMessage() - for display errors and warnings you can also use it for display success messages but this may a cause a "Over-Flashing" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__dataservices_exportxml_service__["a" /* ExportXmlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__dataservices_exportxml_service__["a" /* ExportXmlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_message__["FlashMessageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dataservices_topologytemplate_topologytemplate_service__["a" /* TopologyTemplateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservices_levelgraph_levelgraph_service__["a" /* LevelGraphService */]) === "function" && _d || Object])
], TopologyTemplateComponent);

var TopologyTemplateComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=topologytemplate.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodetemplate_nodetemplate_module__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__relationshiptemplate_relationshiptemplate_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topologytemplatedetails_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TopologyTemplateDetailsModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - TopologyTemplateDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                           should be accessible in the TopologyTemplateDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function TopologyTemplateDetailsModule() {
    }
    return TopologyTemplateDetailsModule;
}());
TopologyTemplateDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__nodetemplate_nodetemplate_module__["a" /* NodeTemplateModule */], __WEBPACK_IMPORTED_MODULE_1__relationshiptemplate_relationshiptemplate_module__["a" /* RelationshipTemplateModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__topologytemplatedetails_component__["a" /* TopologyTemplateDetailsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__topologytemplatedetails_component__["a" /* TopologyTemplateDetailsComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module - TopologyTemplateDetailsModule - Lazy loaded module as wrapper for all application modules and components which
     *                                           should be accessible in the TopologyTemplateDetailsModule
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], TopologyTemplateDetailsModule);

//# sourceMappingURL=topologytemplatedetails.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topologytemplatedetails_component__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplatesDetailsRoutes; });

/**********************************************************************************************************************************************************************************************************
 *
 * @route - TopologyTemplatesDetailsRoutes - Path for the navigation to the TopologyTemplatesDetailsComponent
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var TopologyTemplatesDetailsRoutes = [
    {
        path: 'topologytemplatedetails',
        component: __WEBPACK_IMPORTED_MODULE_0__topologytemplatedetails_component__["a" /* TopologyTemplateDetailsComponent */]
    }
];
//# sourceMappingURL=topologytemplatesdetails.routes.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_datamodels_types_nodetype__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_types_nodetype_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// URL for icon Upload
var URL = '/api/fileupload/nodetype';
var NodeTypeComponent = NodeTypeComponent_1 = (function () {
    function NodeTypeComponent(nodeTypeService, flashMessageService) {
        this.nodeTypeService = nodeTypeService;
        this.flashMessageService = flashMessageService;
        this.createdNodeType = new __WEBPACK_IMPORTED_MODULE_2__shared_datamodels_types_nodetype__["a" /* NodeType */]();
        this.editNodeType = new __WEBPACK_IMPORTED_MODULE_2__shared_datamodels_types_nodetype__["a" /* NodeType */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessage"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({ url: URL });
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize NodeTypeComponent', NodeTypeComponent_1.name);
        this.flashMessage.timeoutInMS = 4000;
        this.createdNodeType.repository = this.repository;
        this.createdNodeType.repositoryId = this.repository.id;
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - createNodeType - Call the NodeTypeService for creating a new NodeType in the database
     *                            and subscribe for a callback
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeComponent.prototype.createNodeType = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create NodeType', NodeTypeComponent_1.name);
        this.nodeTypeService.createNodeType(this.createdNodeType)
            .subscribe(function (nodeTypeResponse) {
            var tempURL = URL + '/' + nodeTypeResponse.id;
            _this.uploader.setOptions({ url: tempURL });
            _this.uploader.uploadAll();
            _this.uploader.onCompleteItem = function (item, response, status, headers) {
                nodeTypeResponse.icon = item.url + '/' + response;
                _this.nodeTypeService.updateNodeType(nodeTypeResponse).subscribe();
            };
            _this.nodeTypes.push(nodeTypeResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('NodeType with name: ' + nodeTypeResponse.name + ' was created sucessfully with id: ' + nodeTypeResponse.id, NodeTypeComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - updateNodeType - Call the NodeTypeService for updating the NodeType in the database and subscribe for a callback.
     *
     * @param - name: string - New name of the NodeType
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeComponent.prototype.updateNodeType = function (name) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Update NodeType', NodeTypeComponent_1.name);
        this.editNodeType.name = name;
        this.nodeTypeService.updateNodeType(this.editNodeType)
            .subscribe(function (nodeTypeResponse) {
            _this.nodeTypes = __WEBPACK_IMPORTED_MODULE_4__utility__["a" /* Utility */].updateElementInArry(nodeTypeResponse, _this.nodeTypes);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('NodeType with id: ' + nodeTypeResponse.id + ' and name:' + nodeTypeResponse.name + ' was updated sucessfully.', NodeTypeComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - deleteNodeType - Call the NodeTypeService for delete a NodeType from the database and subscribe for a callback.
     *
     * @param - id: number - ID of the NodeType witch should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeComponent.prototype.deleteNodeType = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete NodeType', NodeTypeComponent_1.name);
        this.nodeTypeService.deleteNodeType(id)
            .subscribe(function (nodeTypeResponse) {
            _this.nodeTypes = __WEBPACK_IMPORTED_MODULE_4__utility__["a" /* Utility */].deleteElementFromArry(id, _this.nodeTypes);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('NodeType with id: ' + id + ' was deleted sucessfully.', NodeTypeComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - Set the editable NodeType Data
     *
     * @param nodeType: NodeType - The nodeType witch should be edit
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeComponent.prototype.setEditNodeType = function (nodeType) {
        this.editNodeType = nodeType;
    };
    return NodeTypeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NodeTypeComponent.prototype, "nodeTypes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]) === "function" && _a || Object)
], NodeTypeComponent.prototype, "repository", void 0);
NodeTypeComponent = NodeTypeComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-nodetype',
        template: __webpack_require__(774),
        styles: [__webpack_require__(706)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - NodeTypeComponent - The component retrieve all available NodeType of the currently selected Repository
     *                                  from the database and list them. You can create, delete or edit the NodeType.
     *                                  Also you can select a NodeType and call the NodeTypeDetailComponent where you can see all
     *                                  data which are included in a NodeType.
     *
     * @field - nodeTypes: NodeType[] -  List of the nodeTypes
     * @field - repository: Repository -  Repository which is currently selected
     * @field - createdNodeType: NodeType - NodeType which should be created
     * @field - editNodeType: NodeType - NodeType which should be edit
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                     cause a "Over Flash" for the user experience
     * @field - uploader: FileUploader - UploaderSerivce for uploading files like icons to the file system of the server
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_types_nodetype_service__["a" /* NodeTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"]) === "function" && _c || Object])
], NodeTypeComponent);

var NodeTypeComponent_1, _a, _b, _c;
//# sourceMappingURL=nodetype.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_nodetype__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralDataComponent = GeneralDataComponent_1 = (function () {
    function GeneralDataComponent() {
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    GeneralDataComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize GeneralDataComponent Component', GeneralDataComponent_1.name);
    };
    return GeneralDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_nodetype__["a" /* NodeType */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_nodetype__["a" /* NodeType */]) === "function" && _a || Object)
], GeneralDataComponent.prototype, "currentNodeType", void 0);
GeneralDataComponent = GeneralDataComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-generaldata',
        template: __webpack_require__(775),
        styles: [__webpack_require__(707)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - GeneralDataComponent - The component displays the general data of a NodeType Object.
     *
     *
     * @field - currentNodeType: NodeType -  NodeType which is currently selected
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [])
], GeneralDataComponent);

var GeneralDataComponent_1, _a;
//# sourceMappingURL=generaldata.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodetypedetails_component__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTypeDetailsRoutes; });

/*******************************************************************************************************************
 *
 * @route - NodeTypeDetailsRoutes - Path to the RelationshipDetailsComponent
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************/
var NodeTypeDetailsRoutes = [
    {
        path: 'nodetypedetails',
        component: __WEBPACK_IMPORTED_MODULE_0__nodetypedetails_component__["a" /* NodeTypeDetailsComponent */]
    }
];
//# sourceMappingURL=nodetypedetails.routes.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_datamodels_types_relationshiptype__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_types_relationshiptype_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// URL for icon Upload
var URL = '/api/fileupload/relationshiptype';
var RelationshipTypeComponent = RelationshipTypeComponent_1 = (function () {
    function RelationshipTypeComponent(relationshipTypeService, flashMessageService) {
        this.relationshipTypeService = relationshipTypeService;
        this.flashMessageService = flashMessageService;
        this.createdRelationshipType = new __WEBPACK_IMPORTED_MODULE_2__shared_datamodels_types_relationshiptype__["a" /* RelationshipType */]();
        this.editRelationshipType = new __WEBPACK_IMPORTED_MODULE_2__shared_datamodels_types_relationshiptype__["a" /* RelationshipType */]();
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessage"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({ url: URL });
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize RelationshipTypeComponent', RelationshipTypeComponent_1.name);
        this.flashMessage.timeoutInMS = 4000;
        this.createdRelationshipType.repositoryId = this.repository.id;
        this.createdRelationshipType.repository = this.repository;
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - createRelationshipType - Call the RelationshipTypeService for creating a new RelationshipType in the database
     *                            �       and subscribe for a callback
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeComponent.prototype.createRelationshipType = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Create RelationshipType', RelationshipTypeComponent_1.name);
        this.relationshipTypeService.createRelationshipType(this.createdRelationshipType)
            .subscribe(function (relationshipTypeResponse) {
            var tempURL = URL + '/' + relationshipTypeResponse.id;
            _this.uploader.setOptions({ url: tempURL });
            _this.uploader.uploadAll();
            _this.uploader.onCompleteItem = function (item, response, status, headers) {
                relationshipTypeResponse.icon = item.url + '/' + response;
                _this.relationshipTypeService.updateRelationshipType(relationshipTypeResponse).subscribe();
            };
            _this.relationshipTypes.push(relationshipTypeResponse);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('RelationshipType with name: ' + relationshipTypeResponse.name + ' was created sucessfully with id: ' + relationshipTypeResponse.id, RelationshipTypeComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - updateRelationshipType - Call the RelationshipTypeService for updating the RelationshipType in the database and subscribe for a callback.
     *
     * @param - name: string - New name of the RelationshipType
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeComponent.prototype.updateRelationshipType = function (name) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Update RelationshipType', RelationshipTypeComponent_1.name);
        this.editRelationshipType.name = name;
        this.relationshipTypeService.updateRelationshipType(this.editRelationshipType)
            .subscribe(function (relationshipTypeResponse) {
            _this.relationshipTypes = __WEBPACK_IMPORTED_MODULE_4__utility__["a" /* Utility */].updateElementInArry(relationshipTypeResponse, _this.relationshipTypes);
            __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('RelationshipType with id: ' + relationshipTypeResponse.id + ' and name:' + relationshipTypeResponse.name + ' was updated sucessfully.', RelationshipTypeComponent_1.name);
        }, function (error) {
            _this.flashMessage.message = error;
            _this.flashMessage.isError = true;
            _this.flashMessageService.display(_this.flashMessage);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - deleteRelationshipType - Call the RelationshipTypeService for delete a RelationshipType from the database and subscribe for a callback.
     *
     * @param - id: number - ID of the RelationshipType witch should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeComponent.prototype.deleteRelationshipType = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Delete RelationshipType', RelationshipTypeComponent_1.name);
        this.relationshipTypeService.deleteRelationshipType(id)
            .subscribe(function (res) {
            return _this.relationshipTypes = __WEBPACK_IMPORTED_MODULE_4__utility__["a" /* Utility */].deleteElementFromArry(id, _this.relationshipTypes);
        });
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @method - setEditRelationshipType - Set the editable RelationshipType Data
     *
     * @param - nodeType - The RelationshipType witch should be edit
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeComponent.prototype.setEditRelationshipType = function (editRelationshipType) {
        this.editRelationshipType = editRelationshipType;
    };
    return RelationshipTypeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RelationshipTypeComponent.prototype, "relationshipTypes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]) === "function" && _a || Object)
], RelationshipTypeComponent.prototype, "repository", void 0);
RelationshipTypeComponent = RelationshipTypeComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-relationshiptype',
        template: __webpack_require__(777),
        styles: [__webpack_require__(709)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - RelationshipTypeComponent Class - The component retrieve all available RelationshipType of the currently selected Repository
     *                                                from the database and list them. You can delete, import, export or edit the RelationshipType.
     *                                                Also you can select a RelationshipType and call the RelationshipTypeDetailComponent where you can see all
     *                                                data which are included in a RelationshipType.
     *
     * @field - relationshipTypes: RelationshipType[] -  List of the relationshipTypes
     * @field - repository: Repository -  Repository which is currently selected
     * @field - createdRelationshipType: RelationshipType - RelationshipType which should be created
     * @field - editRelationshipType: RelationshipType - RelationshipType which should be edit
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                     cause a "Over Flash" for the user experience
     * @field - uploader: FileUploader - UploaderSerivce for uploading files like icons to the file system of the server
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_message__["FlashMessageService"]) === "function" && _c || Object])
], RelationshipTypeComponent);

var RelationshipTypeComponent_1, _a, _b, _c;
//# sourceMappingURL=relationshiptype.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_relationshiptype__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_relationshiptype_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralDataComponent = GeneralDataComponent_1 = (function () {
    function GeneralDataComponent(relationshipTypeService, flashMessageService) {
        this.relationshipTypeService = relationshipTypeService;
        this.flashMessageService = flashMessageService;
        this.flashMessage = new __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__["FlashMessage"]();
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @method - ngOnInit - Is called when the component is initialized
     *
     *******************************************************************************************************************************************************************************************************/
    GeneralDataComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('Iniitalize GeneralDataComponent Component', GeneralDataComponent_1.name);
    };
    return GeneralDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_relationshiptype__["a" /* RelationshipType */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_datamodels_types_relationshiptype__["a" /* RelationshipType */]) === "function" && _a || Object)
], GeneralDataComponent.prototype, "currentRelationshipType", void 0);
GeneralDataComponent = GeneralDataComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-generaldata',
        template: __webpack_require__(778),
        styles: [__webpack_require__(710)]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @component - GeneralDataComponent Class - The component displays the general data of a RelationshipType Object.
     *
     *
     * @field - currentRelationshipType: RelationshipType -  RelationshipType which is currently selected
     * @field - flashMessage: FlashMessage - For display errors and warnings you can also use it for display success messages but this may a
     *                                       cause a "Over Flash" for the user experience
     *
     * @author - Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dataservices_types_relationshiptype_service__["a" /* RelationshipTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__["FlashMessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_message__["FlashMessageService"]) === "function" && _c || Object])
], GeneralDataComponent);

var GeneralDataComponent_1, _a, _b, _c;
//# sourceMappingURL=generaldata.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relationshiptypedetails_component__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipDetailsRoutes; });

/**********************************************************************************************************************************************************************************************************
 *
 * @route - RelationshipDetailsRoutes - Path to the RelationshipDetailsComponent
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var RelationshipDetailsRoutes = [
    {
        path: 'relationshiptypedetails',
        component: __WEBPACK_IMPORTED_MODULE_0__relationshiptypedetails_component__["a" /* RelationshipTypeDetailsComponent */]
    }
];
//# sourceMappingURL=relationshipdetails.routes.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
/*******************************************************************************************************************************************************************************************************
 *
 * @class - Repository - Collection of NodeTypes and RelationshipTypes
 *
 * @field - id: number - ID of the Repository
 * @field - name: name - Name of the Repository
 * @field - nodeTypeList: NodeTypeList[] - Array of the NodeTypes in the Repository
 * @field - relationshipType: RelationshipType[] - Array of the RelationshipTypes in the Repository
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var Repository = (function () {
    function Repository() {
        this.id = null;
        this.id = null;
        this.name = 'Unnamed';
        this.nodeTypes = [];
        this.relationshipTypes = [];
    }
    return Repository;
}());

//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - TopologyTemplateService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for Topology Templates
 *
 *********************************************************************************************************************************************************************************************************/
var TopologyTemplateService = TopologyTemplateService_1 = (function () {
    function TopologyTemplateService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.topologyTemplateURL = '/api/topologytemplates';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getTopologyTemplates - Send GET all Topology Template REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.getTopologyTemplates = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - TOPOLOGYTEMPLATE]: Send GET Topology TemplateRequest', TopologyTemplateService_1.name);
        return this.http.get(this.topologyTemplateURL).map(this.extractTopologyTemplates).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getTopologyTemplate - Send GET Topology Template REQUEST
     *
     * @param - id: number - ID of the TopologyTemplate which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.getTopologyTemplate = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - TOPOLOGYTEMPLATE]: Send GET Topology Request with ID: ' + id, TopologyTemplateService_1.name);
        return this.http.get(this.topologyTemplateURL + '/' + id).map(this.extractTopologyTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createTopologyTemplate - Send POST Topology Template REQUEST
     *
     * @param - topologyTemplate: TopologyTemplate - TopologyTemplate which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.createTopologyTemplate = function (topologyTemplate) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - TOPOLOGYTEMPLATE]: Send POST Topology Template Request', TopologyTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - TOPOLOGYTEMPLATE]: ' + JSON.stringify(topologyTemplate), TopologyTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.topologyTemplateURL, topologyTemplate, options).map(this.extractTopologyTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateTopologyTemplate - Send PUT Topology Template REQUEST
     *
     * @param - topologyTemplate: TopologyTemplate - TopologyTemplate which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.updateTopologyTemplate = function (topologyTemplate) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - TOPOLOGYTEMPLATE]: Send PUT Topology Template Request', TopologyTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - TOPOLOGYTEMPLATE]: ' + JSON.stringify(topologyTemplate), TopologyTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.topologyTemplateURL + '/' + topologyTemplate.id, topologyTemplate, options).map(this.extractTopologyTemplate).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteTopologyTemplate - Send DELETE Topology Template REQUEST
     *
     * @param - id: number - ID of the TopologyTemplate which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.deleteTopologyTemplate = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - TOPOLOGYTEMPLATE]: Send DELETE Topology Template Request', TopologyTemplateService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.topologyTemplateURL + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractTopologyTemplates - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.extractTopologyTemplates = function (res) {
        var body = res.json();
        var topologyTemplateList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - TOPOLOGYTEMPLATE]: Extract Topology Template Data List', TopologyTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - TOPOLOGYTEMPLATE]: ' + JSON.stringify(body), TopologyTemplateService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var topologytemplate = body_1[_i];
            var tempTopologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
            tempTopologyTemplate = topologytemplate;
            topologyTemplateList.push(tempTopologyTemplate);
        }
        return topologyTemplateList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractTopologyTemplate - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.extractTopologyTemplate = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - TOPOLOGYTEMPLATE]: ' + JSON.stringify(body), TopologyTemplateService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - TOPOLOGYTEMPLATE]: Extract Topology Template Data', TopologyTemplateService_1.name);
        var topologyTemplate = new __WEBPACK_IMPORTED_MODULE_1__datamodels_topology_topologytemplate__["a" /* TopologyTemplate */]();
        topologyTemplate = body;
        return topologyTemplate || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    TopologyTemplateService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return TopologyTemplateService;
}());
TopologyTemplateService = TopologyTemplateService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], TopologyTemplateService);

var TopologyTemplateService_1, _a;
//# sourceMappingURL=topologytemplate.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_types_relationshiptype__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - RelationshipTypeService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for RelationshipTypes
 *
 *********************************************************************************************************************************************************************************************************/
var RelationshipTypeService = RelationshipTypeService_1 = (function () {
    function RelationshipTypeService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.relationshipTypeUrl = '/api/relationshiptypes';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getRelationshipTypes - Send GET all RelationshipType REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.getRelationshipTypes = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTYPE] Send GET Relationship Types Request', RelationshipTypeService_1.name);
        return this.http.get(this.relationshipTypeUrl).map(this.extractRelationshipTypes).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getRelationshipType - Send GET RelationshipType REQUEST
     *
     * @param - id: number - ID of the RelationshipType which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.getRelationshipType = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTYPE] Send GET Relationship Type Request with ID:' + id, RelationshipTypeService_1.name);
        return this.http.get(this.relationshipTypeUrl + '/' + id).map(this.extractRelationshipType).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createRelationshipType - Send POST RelationshipType REQUEST
     *
     * @param - relationshipType: RelationshipType - RelationshipType which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.createRelationshipType = function (relationshipType) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTYPE] Send POST RelationshipType Request', RelationshipTypeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - RELATIONSHIPTYPE]' + JSON.stringify(relationshipType), RelationshipTypeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.relationshipTypeUrl, relationshipType, options).map(this.extractRelationshipType).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateRelationshipType - Send PUT RelationshipType REQUEST�
     *
     * @param - relationshipType: RelationshipType - RelationshipType which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.updateRelationshipType = function (relationshipType) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTYPE] Send PUT RelationshipType Request', RelationshipTypeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - RELATIONSHIPTYPE] ' + JSON.stringify(relationshipType), RelationshipTypeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.relationshipTypeUrl + '/' + relationshipType.id, relationshipType, options).map(this.extractRelationshipType).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteRelationshipType - Send DELETE RelationshipType REQUEST
     *
     * @param - id: number - ID of the RelationshipType which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.deleteRelationshipType = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - RELATIONSHIPTYPE] Send DELETE RelationshipType Request with ID: ' + id, RelationshipTypeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.relationshipTypeUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractRelationshipTypes - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.extractRelationshipTypes = function (res) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - RELATIONSHIPTYPE]: Extract Data of Response Body', RelationshipTypeService_1.name);
        var body = res.json();
        var relationshipTypeList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - RELATIONSHIPTYPE]: ' + JSON.stringify(body), RelationshipTypeService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var relationshipType = body_1[_i];
            var tempRelationshipType = new __WEBPACK_IMPORTED_MODULE_1__datamodels_types_relationshiptype__["a" /* RelationshipType */]();
            tempRelationshipType = relationshipType;
            relationshipTypeList.push(tempRelationshipType);
        }
        return relationshipTypeList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractRelationshipType - Extract data from response data object
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.extractRelationshipType = function (res) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - RELATIONSHIPTYPE]: Extract Data of Response Body', RelationshipTypeService_1.name);
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - RELATIONSHIPTYPE]: ' + JSON.stringify(body), RelationshipTypeService_1.name);
        var relationshipType = new __WEBPACK_IMPORTED_MODULE_1__datamodels_types_relationshiptype__["a" /* RelationshipType */]();
        relationshipType = body;
        return relationshipType || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RelationshipTypeService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return RelationshipTypeService;
}());
RelationshipTypeService = RelationshipTypeService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], RelationshipTypeService);

var RelationshipTypeService_1, _a;
//# sourceMappingURL=relationshiptype.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expectedproperty_expectedproperty_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providedproperty_providedproperty_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PropertyModule = (function () {
    /**********************************************************************************************************************************************************************************************************
     *
     * @module PropertyModule - SharedModule as wrapper for ExpectedProperties and ProvidedProperties import the module when you need access to the properties
     *
     * @author Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
    function PropertyModule() {
    }
    return PropertyModule;
}());
PropertyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__expectedproperty_expectedproperty_component__["a" /* ExpectedPropertyComponent */], __WEBPACK_IMPORTED_MODULE_1__providedproperty_providedproperty_component__["a" /* ProvidedPropertyComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__expectedproperty_expectedproperty_component__["a" /* ExpectedPropertyComponent */], __WEBPACK_IMPORTED_MODULE_1__providedproperty_providedproperty_component__["a" /* ProvidedPropertyComponent */]]
    })
    /**********************************************************************************************************************************************************************************************************
     *
     * @module PropertyModule - SharedModule as wrapper for ExpectedProperties and ProvidedProperties import the module when you need access to the properties
     *
     * @author Arthur Kaul
     *
     *********************************************************************************************************************************************************************************************************/
], PropertyModule);

//# sourceMappingURL=property.module.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/**********************************************************************************************************************************************************************************************************
 *
 * @class - Constants - Collection of all constants values which are needed in the application context.
 *
 * @field - LEVELHEIGHT - Height of the level area at initial creation
 * @field - LEVELGAPOFFSET - Gap between the level areas
 * @field - LABELOFFSET - Offset between level area an Label
 * @field - NODEHEIGHT - Node height at initial creation
 * @field - NODEWIDTH - Node width at initial creation
 * @field - FLASHMESSAGETIMEOUT - Timeout value for the flash messages
 *
 * @author - Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

Constants.LEVELHEIGHT = 300;
Constants.LEVELGAPOFFSET = 40;
Constants.LABELOFFSET = 50;
Constants.NODEHEIGHT = 150;
Constants.NODEWIDTH = 350;
Constants.FLASHMESSAGETIMEOUT = 4000;
Constants.LOWESTABSTRACTIONLEVEL = 0;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraph; });
/*******************************************************************************************************************************************************************************************************
 *
 * @class - LevelGraph - LevelGraph Model is used for the refinement of TopologyTemplate Data Models
 *
 * @field - id: number - ID of the LevelGraph
 * @field - name: string - Name of the LevelGraph
 * @field - levels: Level[] - Array of the different levels of a LevelGraph
 * @field - levelGraphNodes: LevelGraphNode[] - Array of all LevelGraphNodes in the LevelGraph
 * @field - levelGraphRelations: LevelGraphRelation[] - Array of all LevelGraphRelations in the LevelGraph
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var LevelGraph = (function () {
    function LevelGraph() {
        this.checked = false;
        this.name = 'Unnamed';
        this.levels = [];
        this.levelGraphRelations = [];
        this.levelGraphNodes = [];
    }
    /*******************************************************************************************************************************************************************************************************
     *
     * Getter Methods
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraph.prototype.getLevel = function (levelId) {
        for (var i = 0; i < this.levels.length; i++) {
            if (this.levels[i].id === levelId) {
                return this.levels[i];
            }
        }
        return null;
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * Setter Methods
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraph.prototype.setLevel = function (level) {
        for (var i = 0; i < this.levels.length; i++) {
            if (this.levels[i].id === level.id) {
                this.levels[i] = level;
            }
        }
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * Remove Methods
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraph.prototype.removeLevel = function (levelId) {
        this.levels = this.levels.filter(function (obj) {
            return obj.id !== levelId;
        });
    };
    LevelGraph.prototype.removeLevelGraphRelation = function (levelGraphRelationId) {
        this.levels = this.levels.filter(function (obj) {
            return obj.id !== levelGraphRelationId;
        });
    };
    LevelGraph.prototype.removeLevelGraphNode = function (levelGraphNodeId) {
        this.levels = this.levels.filter(function (obj) {
            return obj.id !== levelGraphNodeId;
        });
    };
    return LevelGraph;
}());

//# sourceMappingURL=levelgraph.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopologyTemplate; });
/*******************************************************************************************************************************************************************************************************
 *
 * @class - TopologyTemplate -  TopologyTemplate Model is used for model a abstract or specific system architecture
 *
 * @field - id: number - ID of the TopologyTemplate
 * @field - name: string - Name of the TopologyTemplate
 * @field - nodeTemplates: NodeTemplate[] - Array of all NodeTemplates in the LevelGraph
 * @field - relationshipTemplates: RelationshipTemplate[] - Array of all RelationshipTemplates in the LevelGraph
 * @field - parentTopologyTemplate: TopologyTemplate - Parent of the TopologyTemplate from which it was derived
 * @field - parentTopologyTemplateId: number - ID of the parent of the topology
 * @field - childTopologyTemplates: TopologyTemplate[] - Array of child of the TopologyTemplate. Child are all TopologyTemplate which are generated through the refinement from this topology
 * @field - abstractionLevel: number : Level is calculated from the Root Topology
 *
 * @author Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var TopologyTemplate = (function () {
    function TopologyTemplate() {
        this.id = null;
        this.name = 'Unnamed';
        this.nodeTemplates = [];
        this.relationshipTemplates = [];
        this.childTopologyTemplates = [];
    }
    return TopologyTemplate;
}());

//# sourceMappingURL=topologytemplate.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*********************************************************************************************************************************************************************************************************
 *
 * @service - RepositoryService  - Implements the calls to the rest interface of the application server and
 *                                 handle the request construction and response extraction for Repository data
 *
 *********************************************************************************************************************************************************************************************************/
var RepositoryService = RepositoryService_1 = (function () {
    function RepositoryService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.repositoriesUrl = '/api/repositories';
    }
    /*******************************************************************************************************************************************************************************************************
     *
     * @request - getRepositories - Send GET all Repositories REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.getRepositories = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REPOSITORY] Send GET Repositories Request', RepositoryService_1.name);
        return this.http.get(this.repositoriesUrl).map(this.extractRepositorys).catch(this.handleError);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @request - getRepository - Send GET Repository REQUEST
     *
     * @param - id: number - ID of the Repository which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.getRepository = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REPOSITORY] Send GET Repository Request with ID:' + id, RepositoryService_1.name);
        return this.http.get(this.repositoriesUrl + '/' + id).map(this.extractRepository).catch(this.handleError);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @request - createRepository - Send POST Repository REQUEST
     *
     * @param - repository: Repository - Repository which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.createRepository = function (repository) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REPOSITORY] Send POST Repository Request', RepositoryService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - REPOSITORY]' + JSON.stringify(repository), RepositoryService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.repositoriesUrl, repository, options).map(this.extractRepository).catch(this.handleError);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @request - Send PUT Repository REQUEST
     *
     * @param - repository: Repository - Repository which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.updateRepository = function (repository) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REPOSITORY] Send PUT Request Repository', RepositoryService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - REPOSITORY] ' + JSON.stringify(repository), RepositoryService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.repositoriesUrl + '/' + repository.id, repository, options).map(this.extractRepository).catch(this.handleError);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @request - deleteRepository - Send DELETE Repository REQUEST
     *
     * @param - id: number - ID of the Repository which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.deleteRepository = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - REPOSITORY] Send DELETE Repository Request with ID: ' + id, RepositoryService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.repositoriesUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @response - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.extractRepositorys = function (res) {
        var body = res.json();
        var repoList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - REPOSITORIES]: Extract Data of Response Body', RepositoryService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - REPOSITORIES]: ' + JSON.stringify(body), RepositoryService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var repository = body_1[_i];
            var tempRepository = new __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]();
            tempRepository = repository;
            repoList.push(tempRepository);
        }
        return repoList || {};
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @response - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.extractRepository = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - REPOSITORY]: Extract Data of Response Body', RepositoryService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - REPOSITORY]: ' + JSON.stringify(body), RepositoryService_1.name);
        var rep = new __WEBPACK_IMPORTED_MODULE_1__datamodels_repository_repository__["a" /* Repository */]();
        rep = body;
        return rep || {};
    };
    /*******************************************************************************************************************************************************************************************************
     *
     * @error - handleError -  Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    RepositoryService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return RepositoryService;
}());
RepositoryService = RepositoryService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], RepositoryService);

var RepositoryService_1, _a;
//# sourceMappingURL=repository.service.js.map

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".dashboard-container{\r\n\tpadding-top: 60px;\r\n\twidth:100%;\r\n\theight:90%;\r\n}\r\n\r\n.dashboard-router-outlet{\r\n\tpadding:5px; \r\n\tmargin:0px;\r\n\t\theight:100%;\r\n\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f3e2c7+0,c19e67+50,b68d4c+51,e9d4b3+100;L+Brown+3D */\r\n\r\n/**********************************************************************************************************************************************\r\n *\r\n * Gradients\r\n *\r\n ***********************************************************************************************************************************************/\r\n.repositoryListItem {\r\n\tbackground: #f5f6f6; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(to bottom, #f5f6f6 0%, #dbdce2 21%, #b8bac6 49%, #dddfe3\r\n\t\t80%, #f5f6f6 100%);\r\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6',\r\n\t\tendColorstr='#f5f6f6', GradientType=0); /* IE6-9 */\r\n\tpadding: 5px;\r\n\tmarging: 5px;\r\n\tfont-size: 1.2em;\r\n}\r\n\r\n.repositoryListItem:hover {\r\n\tbackground: #3c6e9a;\r\n\tcursor: pointer;\r\n}\r\n\r\n.nodeType { /* ff3.6+ */ /* safari4+,chrome */ /* safari5.1+,chrome10+ */ /* opera 11.10+ */ /* ie10+ */\r\nbackground: linear-gradient(1deg, rgba(222,152,12,1) 0%, rgba(232,159,12,1) 25%, rgba(255,174,13,1) 52%, rgba(237,162,12,1) 75%, rgba(219,150,11,1) 100%); /* w3c */\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#DB960B', endColorstr='#DE980C',GradientType=0 ); /* ie6-9 */\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\t  border-style: solid;\r\n    border-width: 3px;\r\n    border-color:black;\r\n}\r\n\r\n.relationshipType { /* ff3.6+ */ /* safari4+,chrome */\r\n\t/* safari5.1+,chrome10+ */ /* opera 11.10+ */ /* ie10+ */\r\n\tbackground: linear-gradient(0deg, rgba(0, 128, 0, 1) 0%,\r\n\t\trgba(27, 252, 15, 1) 50%, rgba(0, 128, 0, 1) 100%); /* w3c */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#008000',\r\n\t\tendColorstr='#008000', GradientType=0); /* ie6-9 */\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tborder-style: solid;\r\n    border-width: 3px;\r\n    border-color:black;\r\n}\r\n\r\n.relationshipTypeFragment {\r\n\t\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tbackground-color:#C5E0B3;\r\n}\r\n\r\n.nodeTypeFragment{\r\n\tbackground-color:#F7CBAC;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n}\r\n\r\n/**********************************************************************************************************************************************\r\n *\r\n * Buttons\r\n *\r\n ***********************************************************************************************************************************************/\r\n#saveBtn {\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n#selectRepository {\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n#collapseBtn {\r\n\tmargin-right: 10px;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n/**********************************************************************************************************************************************\r\n *\r\n * Controller Panel\r\n *\r\n ***********************************************************************************************************************************************/\r\n.controller-group {\r\n\tmargin: 10px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.group {\r\n\tmargin: 5px;\r\n\tpadding: 5px;\r\n}\r\n\r\n#level-list {\r\n\toverflow: scroll;\r\n\theight: 150px;\r\n\tmargin: 5px;\r\n\tpadding: 5px;\r\n}\r\n\r\n/**********************************************************************************************************************************************\r\n *\r\n * Tool Box\r\n *\r\n ***********************************************************************************************************************************************/\r\n#toolbox_area {\r\n\tmargin-top: 10px;\r\n\tmargin-right: 10px;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\toverflow: auto;\r\n}\r\n\r\n.toolbox-group {\r\n\tmargin: 0px;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tborder-style: solid;\r\n\tborder-width: 2px;\r\n\tborder-color: grey\r\n}\r\n\r\n.tool-item {\r\n\tmargin: 0px;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n}\r\n\r\n.modelling-tool-list {\r\n\tmargin: 0px;\r\n\tmargin-top: 5px;\r\n\tpadding: 0px;\r\n\twidth: 100%;\r\n}\r\n\r\n#modelling-tool-list:hover {\r\n\tbackground: #3c6e9a;\r\n\tcursor: pointer;\r\n}\r\n\r\n.warning-item {\r\n\tpadding: 5px;\r\n}\r\n\r\n/**********************************************************************************************************************************************\r\n *\r\n * Draw Area\r\n *\r\n ***********************************************************************************************************************************************/\r\nsvg {\r\n\theight: 30000px;\r\n\twidth: 30000px;\r\n\t\r\n}\r\n\r\n#draw_area {\r\n\theight: 100%;\r\n\tmargin-top: 10px;\r\n\tmargin-right: 0px;\r\n\toverflow: scroll;\r\n}\r\n\r\n.level-move-bar {\r\n\twidth: 100%;\r\n\tfill: grey;\r\n}\r\n\r\n.level-panel {\r\n\twidth: 100%;\r\n\tfill: white;\r\n\tfill-opacity: 0.0;\r\n\tstroke-dasharray: 10, 20;\r\n\tstroke-width: 8;\r\n\tstroke: black;\r\n\tstroke-dasharray: 10, 20;\r\n}\r\n\r\n#modeller{\r\n\theight: 100%;\r\n}\r\n\r\nul {\r\n\tlist-style-type: none;\r\n}\r\n\r\n.list {\r\n\tpadding: 5px;\r\n\tmax-height: 300px;\r\n\toverflow: auto;\r\n}\r\n\r\nh3 {\r\n\tfont: bold 20px/1.5 Helvetica, Verdana, sans-serif;\r\n}\r\n\r\nli img {\r\n\tfloat: left;\r\n\tmargin: 0 15px 0 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".panel{\r\n\tmargin:30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".listItem {\r\n\tbackground: #f5f6f6; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(to bottom, #f5f6f6 0%, #dbdce2 21%, #b8bac6 49%, #dddfe3\r\n\t\t80%, #f5f6f6 100%);\r\n\t/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6',\r\n\t\tendColorstr='#f5f6f6', GradientType=0); /* IE6-9 */\r\n\tpadding: 5px;\r\n\tmarging: 5px;\r\n\tfont-size: 1.2em;\r\n\r\n}\r\n\r\n.listItem:hover {\r\n\tbackground: #3c6e9a;\r\n\tcursor: pointer;\r\n}\r\n\r\n.nodeTemplate { /* ff3.6+ */ /* safari4+,chrome */ /* safari5.1+,chrome10+ */ /* opera 11.10+ */ /* ie10+ */\r\nbackground: linear-gradient(1deg, rgba(143,193,242,1) 0%, rgba(123,166,209,1) 50%, rgba(143,193,242,1) 100%); /* w3c */\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8FC1F2', endColorstr='#8FC1F2',GradientType=0 ); /* ie6-9 */\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n    border-style: solid;\r\n    border-width: 3px;\r\n    border-color:black;\r\n}\r\n\r\n.nodeTemplate:hover {\r\n\tbackground: #3c6e9a;\r\n\tcursor: pointer;\r\n}\r\n\r\nsvg {\r\n\theight: 30000px;\r\n\twidth: 30000px;\r\n}\r\n\r\n/*********************************************************************************************************************************\r\n *\r\n * Heading \r\n *\r\n ********************************************************************************************************************************/\r\n.control-group {\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/*********************************************************************************************************************************\r\n *\r\n * Tool Box \r\n *\r\n ********************************************************************************************************************************/\r\n#toolbox_area {\r\n\tmargin-top: 10px;\r\n\theight: 100%;\r\n\twidth:300px;\r\n\toverflow: auto;\r\n}\r\n\r\n.toolbox-group {\r\n\tmargin: 0px;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tborder-style: solid;\r\n\tborder-width: 2px;\r\n\tborder-color: grey\r\n}\r\n\r\n.tool-item {\r\n\tmargin: 0px;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n}\r\n\r\n/*********************************************************************************************************************************\r\n *\r\n * Draw Area Topology Templates \r\n *\r\n ********************************************************************************************************************************/\r\n#draw_area {\r\n\theight: 100%;\r\n\tmargin-top: 10px;\r\n\tmargin-right: 0px;\r\n\tmargin-left: 0px;\r\n\toverflow: scroll;\r\n}\r\n\r\n/*********************************************************************************************************************************\r\n *\r\n * Buttons\r\n *\r\n ********************************************************************************************************************************/\r\n#selcetLevelGraph {\r\n\twidth: 100%;\r\n}\r\n\r\nul {\r\n\tlist-style-type: none;\r\n}\r\n\r\n.list {\r\n\tpadding: 5px;\r\n\tmax-height: 300px;\r\n\toverflow: auto;\r\n}\r\n\r\nli img {\r\n\tfloat: left;\r\n\tmargin: 0 15px 0 0;\r\n}\r\n\r\n\r\n.dropdown-submenu {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-submenu>.dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -6px;\r\n    margin-left: -1px;\r\n    border-radius: 0 6px 6px 6px;\r\n}\r\n\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown-submenu>a:after {\r\n    display: block;\r\n    content: \" \";\r\n    float: right;\r\n    width: 0;\r\n    height: 0;\r\n    border-color: transparent;\r\n    border-style: solid;\r\n    border-width: 5px 0 5px 5px;\r\n    border-left-color: #ccc;\r\n    margin-top: 5px;\r\n    margin-right: -10px;\r\n}\r\n\r\n.dropdown-submenu:hover>a:after {\r\n    border-left-color: #fff;\r\n}\r\n\r\n.dropdown-submenu.pull-left {\r\n    float: none;\r\n}\r\n\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n    left: -100%;\r\n    margin-left: 10px;\r\n    border-radius: 6px 0 6px 6px;\r\n}\r\n\r\n#selectRepository {\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n#level_graph_tool{\r\n\t height: 98%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 256,
	"./af.js": 256,
	"./ar": 261,
	"./ar-ly": 257,
	"./ar-ly.js": 257,
	"./ar-ma": 258,
	"./ar-ma.js": 258,
	"./ar-sa": 259,
	"./ar-sa.js": 259,
	"./ar-tn": 260,
	"./ar-tn.js": 260,
	"./ar.js": 261,
	"./az": 262,
	"./az.js": 262,
	"./be": 263,
	"./be.js": 263,
	"./bg": 264,
	"./bg.js": 264,
	"./bn": 265,
	"./bn.js": 265,
	"./bo": 266,
	"./bo.js": 266,
	"./br": 267,
	"./br.js": 267,
	"./bs": 268,
	"./bs.js": 268,
	"./ca": 269,
	"./ca.js": 269,
	"./cs": 270,
	"./cs.js": 270,
	"./cv": 271,
	"./cv.js": 271,
	"./cy": 272,
	"./cy.js": 272,
	"./da": 273,
	"./da.js": 273,
	"./de": 275,
	"./de-at": 274,
	"./de-at.js": 274,
	"./de.js": 275,
	"./dv": 276,
	"./dv.js": 276,
	"./el": 277,
	"./el.js": 277,
	"./en-au": 278,
	"./en-au.js": 278,
	"./en-ca": 279,
	"./en-ca.js": 279,
	"./en-gb": 280,
	"./en-gb.js": 280,
	"./en-ie": 281,
	"./en-ie.js": 281,
	"./en-nz": 282,
	"./en-nz.js": 282,
	"./eo": 283,
	"./eo.js": 283,
	"./es": 285,
	"./es-do": 284,
	"./es-do.js": 284,
	"./es.js": 285,
	"./et": 286,
	"./et.js": 286,
	"./eu": 287,
	"./eu.js": 287,
	"./fa": 288,
	"./fa.js": 288,
	"./fi": 289,
	"./fi.js": 289,
	"./fo": 290,
	"./fo.js": 290,
	"./fr": 293,
	"./fr-ca": 291,
	"./fr-ca.js": 291,
	"./fr-ch": 292,
	"./fr-ch.js": 292,
	"./fr.js": 293,
	"./fy": 294,
	"./fy.js": 294,
	"./gd": 295,
	"./gd.js": 295,
	"./gl": 296,
	"./gl.js": 296,
	"./he": 297,
	"./he.js": 297,
	"./hi": 298,
	"./hi.js": 298,
	"./hr": 299,
	"./hr.js": 299,
	"./hu": 300,
	"./hu.js": 300,
	"./hy-am": 301,
	"./hy-am.js": 301,
	"./id": 302,
	"./id.js": 302,
	"./is": 303,
	"./is.js": 303,
	"./it": 304,
	"./it.js": 304,
	"./ja": 305,
	"./ja.js": 305,
	"./jv": 306,
	"./jv.js": 306,
	"./ka": 307,
	"./ka.js": 307,
	"./kk": 308,
	"./kk.js": 308,
	"./km": 309,
	"./km.js": 309,
	"./ko": 310,
	"./ko.js": 310,
	"./ky": 311,
	"./ky.js": 311,
	"./lb": 312,
	"./lb.js": 312,
	"./lo": 313,
	"./lo.js": 313,
	"./lt": 314,
	"./lt.js": 314,
	"./lv": 315,
	"./lv.js": 315,
	"./me": 316,
	"./me.js": 316,
	"./mi": 317,
	"./mi.js": 317,
	"./mk": 318,
	"./mk.js": 318,
	"./ml": 319,
	"./ml.js": 319,
	"./mr": 320,
	"./mr.js": 320,
	"./ms": 322,
	"./ms-my": 321,
	"./ms-my.js": 321,
	"./ms.js": 322,
	"./my": 323,
	"./my.js": 323,
	"./nb": 324,
	"./nb.js": 324,
	"./ne": 325,
	"./ne.js": 325,
	"./nl": 326,
	"./nl.js": 326,
	"./nn": 327,
	"./nn.js": 327,
	"./pa-in": 328,
	"./pa-in.js": 328,
	"./pl": 329,
	"./pl.js": 329,
	"./pt": 331,
	"./pt-br": 330,
	"./pt-br.js": 330,
	"./pt.js": 331,
	"./ro": 332,
	"./ro.js": 332,
	"./ru": 333,
	"./ru.js": 333,
	"./se": 334,
	"./se.js": 334,
	"./si": 335,
	"./si.js": 335,
	"./sk": 336,
	"./sk.js": 336,
	"./sl": 337,
	"./sl.js": 337,
	"./sq": 338,
	"./sq.js": 338,
	"./sr": 340,
	"./sr-cyrl": 339,
	"./sr-cyrl.js": 339,
	"./sr.js": 340,
	"./ss": 341,
	"./ss.js": 341,
	"./sv": 342,
	"./sv.js": 342,
	"./sw": 343,
	"./sw.js": 343,
	"./ta": 344,
	"./ta.js": 344,
	"./te": 345,
	"./te.js": 345,
	"./th": 346,
	"./th.js": 346,
	"./tl-ph": 347,
	"./tl-ph.js": 347,
	"./tlh": 348,
	"./tlh.js": 348,
	"./tr": 349,
	"./tr.js": 349,
	"./tzl": 350,
	"./tzl.js": 350,
	"./tzm": 352,
	"./tzm-latn": 351,
	"./tzm-latn.js": 351,
	"./tzm.js": 352,
	"./uk": 353,
	"./uk.js": 353,
	"./uz": 354,
	"./uz.js": 354,
	"./vi": 355,
	"./vi.js": 355,
	"./x-pseudo": 356,
	"./x-pseudo.js": 356,
	"./zh-cn": 357,
	"./zh-cn.js": 357,
	"./zh-hk": 358,
	"./zh-hk.js": 358,
	"./zh-tw": 359,
	"./zh-tw.js": 359
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 717;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportXmlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**********************************************************************************************************************************************************************************************************
 *
 * @service - ExportXmlService  - Implements the calls to the rest interface of the application server and
 *                                handle the request construction and response extraction for RelationshipTypeFragment data
 *
 *********************************************************************************************************************************************************************************************************/
var ExportXmlService = ExportXmlService_1 = (function () {
    function ExportXmlService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.exportUrl = '/api/export/xml';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getXmlFile - XML export request to the server for different type of data
     *
     *******************************************************************************************************************************************************************************************************/
    ExportXmlService.prototype.getXmlFile = function (urlPart) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - EXPORT] Send GET XML-File Request', ExportXmlService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/xml', responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* ResponseContentType */].Text });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */](headers);
        return this.http.get(this.exportUrl + urlPart, options).map(function (response) { return new Blob([response.text()], { type: 'application/xml' }); }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    ExportXmlService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(errMsg);
    };
    return ExportXmlService;
}());
ExportXmlService = ExportXmlService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ExportXmlService);

var ExportXmlService_1, _a;
//# sourceMappingURL=exportxml.service.js.map

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<!-- Router Outlet Selector for the lazy loaded DashboardComponent  -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<!-- AdministrationComponent -->\n<div id=\"accordion\" class=\"dashboard_area\">\n\n\t<div class=\"panel panel-default \">\n\n\t\t<!-- Header -->\n\t\t<div class=\"w3-theme-d4 w3-card-4 heading row heading panel-heading control-panel\">\n\t\t\t<h2 class=\"col-sm-3\">Administration</h2>\n\n\t\t\t<!-- Import Button-->\n\t\t\t<button class=\"w3-right w3-theme-l1 btn btn-primary\" id=\"import\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#importAreaDefinition\">\n\t\t\t\t<i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Import\n\t\t\t</button>\n\t\t\t\n\t\t\t<!-- Export Button-->\n\t\t\t<button class=\"w3-right w3-theme-l1 btn btn-primary\" id=\"export\" aria-expanded=\"true\" (click)=\"exportDefinition()\">\n\t\t\t\t<i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Export\n\t\t\t</button>\n\t\t\t\n\t\t</div>\n\t\t\n\t\t<!-- Import Panel -->\n\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"importAreaDefinition\">\n\t\t\t<form>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"file\">Definition XML-File: </label> <input class=\"form-control\" #file type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"importDefinition()\">Upload</button>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n\n\t<!-- Tab Data Panel -->\n\t<div class=\"data-panel\">\n\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#repository\" style=\"color: white\" role=\"tab\">Repository</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#levelGraph\" style=\"color: white\" role=\"tab\">Level Graphs</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#topologyTemplate\" style=\"color: white\" role=\"tab\">Topology Templates</a></li>\n\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\n\t\t\t<div id=\"repository\" class=\"w3-card-4 rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RepositoryComponent -->\n\t\t\t\t<app-repository [repositories]=\"repositories\"></app-repository>\n\t\t\t</div>\n\n\t\t\t<div id=\"levelGraph\" class=\"w3-card-4 rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the LevelGraphComponent -->\n\t\t\t\t<app-levelgraph [levelGraphs]=\"levelGraphs\"></app-levelgraph>\n\t\t\t</div>\n\n\t\t\t<div id=\"topologyTemplate\" class=\"w3-card-4 rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the TopologyTemplateComponent -->\n\t\t\t\t<app-topologytemplate [topologyTemplates]=\"topologyTemplates\"></app-topologytemplate>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<!-- Selector of the top navigation bar available in the entire application -->\n<app-top-nav></app-top-nav>\n\n<!-- Application Content -->\n<section class=\"dashboard-container\">\n\t\n\t<!-- Flash Message for display errors/warnings/success messages -->\n\t<div><flash-message messagePositioning=\"top-right\"></flash-message></div>\n\t\n\t<!-- Router Outlet is used for display the components which are registered in the dashboard.routes.ts file-->\n\t<router-outlet class=\"dashboard-router-outlet\"></router-outlet>\n\n</section>\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphModellerComponent Area -->\n<div id=\"modeller\" class=\"container-fluid\" (mouseup)=\"stopAllEvents()\">\n\n\t<div class=\"row\">\n\n\t\t<!-- Header-->\n\t\t<div class=\"heading col-sm-12 w3-theme-d3 w3-card-4\">\n\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t<h3>\n\t\t\t\t\tLevel-Graph Name: <input disabled style=\"color: black\" value=\"{{currentLevelGraph.name}}\" />\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t<h3></h3>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<button id=\"collapseBtn\" class=\" w3-theme-d1 btn btn-primary w3-right btn-10\" type=\"button\" data-toggle=\"collapse\" data-target=\"#control_level_graph_tool\" aria-expanded=\"false\" aria-controls=\"control_level_graph_tool\">\n\t\t\t\t\t<i class=\"fa fa-caret-down w3-right fa-lg\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t\t<button id=\"saveBtn\" class=\"btn btn-primary w3-right w3-green btn-10\" type=\"button\" (click)=\"updateLevelGraph()\">\n\t\t\t\t\t<i class=\"icon fa fa-floppy-o\" aria-hidden=\"true\"></i>Save\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Controller Panel for the controller groups like filters -->\n\t\t<div id=\"control_level_graph_tool\" class=\"col-sm-12 w3-card-4 w3-theme collapse\">\n\n\t\t\t<!-- Controller Group for add/remove level from the level graph and show/hide spezial levels-->\n\t\t\t<div class=\"controller-group col-sm-4 w3-theme-l2 \">\n\t\t\t\t<div class=\"group\">\n\t\t\t\t\t<button class=\" w3-right\" (click)=\"addLevel()\">\n\t\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<input readonly style=\"width: 100px\" id=\"number_of_levels\" type=\"number\" class=\"w3-center w3-right\" value=\"{{currentLevelGraph.levels.length }}\" min=\"2\">\n\t\t\t\t\t<button class=\" w3-right\" (click)=\"removeLevel()\">\n\t\t\t\t\t\t<i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<label class=\" w3-right\" for=\"number_of_levels\">Number of Levels:</label>\n\t\t\t\t</div>\n\t\t\t\t<label>Displayed Levels:</label>\n\t\t\t\t<div id=\"level-list\" class=\"w3-light-grey\">\n\t\t\t\t\t<label *ngFor=\"let level of currentLevelGraph.levels\" class=\"form-control\"> <input type=\"checkbox\" name=\"levels\" [(ngModel)]=\"level.visible\" value=\"{{level.id}}\" (click)=\"onShowLevel(level)\" /> Level {{level.depth}}\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Controller Group for hide/show the different LevelGraphRelationTypes-->\n\t\t\t<div id=\"control_displayed_relationTypes\" class=\"controller-group col-sm-4 form-group w3-light-grey w3-theme-l2\">\n\t\t\t\t<label>Displayed Level-Graph RelationTypes:</label> <label *ngFor=\"let levelGraphRelationType of levelGraphRelationTypes \" class=\"form-control\"> <input type=\"checkbox\" name=\"levelGraphRelationTypes\" [(ngModel)]=\"levelGraphRelationType.checked\" /> {{levelGraphRelationType.name}}\n\t\t\t\t</label>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" style=\"height: 100%\">\n\n\t\t<!-- Tool box Panel for the tool box groups like ModellingTools / LevelGraphNodes / RepositoryNodes -->\n\t\t<div id=\"toolbox_area\" class=\"w3-col w3-card-4 w3-theme\">\n\n\t\t\t<h5 class=\"w3-center w3-margin\">\n\t\t\t\t<b>Tool Box</b>\n\t\t\t</h5>\n\n\t\t\t<!-- ModelTools -->\n\t\t\t<div class=\"toolbox-group\">\n\t\t\t\t<label>Model Tools:</label>\n\t\t\t\t<ul id=\"modelling-tool-list\">\n\t\t\t\t\t<li class=\"tool-item\"><input style=\"margin-right: 10px;\" type=\"radio\" name=\"radiogroup\" [checked]=\"toolList[0].checked\" (click)=\"changeTool(toolList[0])\" value=\"{{toolList[0].name}}\"><i class=\"fa fa-mouse-pointer\" aria-hidden=\"true\"></i>{{toolList[0].name}}</li>\n\t\t\t\t\t<li class=\"tool-item\"><input style=\"margin-right: 10px;\" type=\"radio\" name=\"radiogroup\" [checked]=\"toolList[1].checked\" (click)=\"changeTool(toolList[1])\" value=\"{{toolList[1].name}}\"><i class=\"fa fa-arrow-right\" style=\"color: green;\" aria-hidden=\"true\"></i>{{toolList[1].name}}</li>\n\t\t\t\t\t<li class=\"tool-item\"><input style=\"margin-right: 10px;\" type=\"radio\" name=\"radiogroup\" [checked]=\"toolList[2].checked\" (click)=\"changeTool(toolList[2])\" value=\"{{toolList[2].name}}\"><i class=\"fa fa-arrow-right\" style=\"color: gray;\" aria-hidden=\"true\"></i>{{toolList[2].name}}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<!-- Level Graph Node Tools -->\n\t\t\t<div class=\"toolbox-group\">\n\t\t\t\t<label>Fragments:</label>\n\t\t\t\t<button style=\"width: 100%\" class=\"w3-theme-d2 w3-border-brown btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#toolbox_level_graph_nodes\" aria-expanded=\"false\" aria-controls=\"toolbox_level_graph_nodes\">\n\t\t\t\t\tFragmenttypes<i class=\"fa fa-caret-down w3-right\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\n\t\t\t\t<div class=\"collapse\" id=\"toolbox_level_graph_nodes\" style=\"margin: 0px; padding: 0px; width: 100%\">\n\t\t\t\t\t<ul id=\"levelGraphSpezialNodeList\" class=\"list-group\">\n\t\t\t\t\t\t<li class=\"relationshipTypeFragment w3-round\" draggable=\"true\" (drag)=\"onDrag($event, fragmentType, 'RELATIONSHIPTYPEFRAGMENT')\" (dragover)=\"onDragOver($event)\">\n\t\t\t\t\t\t\t<h3>RelationshipTypeFragment</h3>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"nodeTypeFragment w3-round\" draggable=\"true\" (drag)=\"onDrag($event, fragmentType, 'NODETYPEFRAGMENT')\" (dragover)=\"onDragOver($event)\">\n\t\t\t\t\t\t\t<h3>NodeTypeFragment</h3>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<!-- Repository Nodes -->\n\t\t\t<div class=\"toolbox-group\">\n\t\t\t\t<label>Repository Types:</label>\n\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t<label>Selected Repository:</label>\n\t\t\t\t\t<button id=\"selectRepository\" class=\" w3-theme-d2 btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">{{selectedRepository.name}}</button>\n\n\t\t\t\t\t<ul class=\"dropdown-menu\" style=\"width: 100%;\">\n\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"repositories.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO RPOSITORY AVAILABLE</li>\n\t\t\t\t\t\t<li class=\"repositoryListItem\" *ngFor=\"let repository of repositories\" (click)=\"onSelectRepository(repository)\">{{ repository.name }}</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tool-item\">\n\t\t\t\t\t<button style=\"width: 100%\" class=\"w3-theme-d2 w3-border-brown btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#toolbox_nodes\" aria-expanded=\"false\" aria-controls=\"toolbox_nodes\">\n\t\t\t\t\t\tNodeTypes<i class=\"fa fa-caret-down w3-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class=\"collapse toolbox\" id=\"toolbox_nodes\">\n\t\t\t\t\t\t<ul id=\"nodeTypesList\" class=\" list-group\" style=\"max-height: 300px; overflow: auto; padding: 5px\">\n\t\t\t\t\t\t\t<li class=\"warning-item w3-pale-yellow\" *ngIf=\"repositories.length < 1\" disabled><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO REPOSITORY AVAILABLE</li>\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedRepository.name === 'Select Repository' && repositories.length > 0\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO RPOSITORY SELECTED</li>\n\t\t\t\t\t\t\t<li class=\"warning-item, w3-pale-yellow\" *ngIf=\"selectedRepository.name !== 'Select Repository'  && selectedRepository.nodeTypes.length < 1\" disabled><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO NODETYPES AVAILABLE</li>\n\t\t\t\t\t\t\t<li class=\"nodeType w3-round\" draggable=\"true\" *ngFor=\"let nodeType of selectedRepository.nodeTypes\" (drag)=\"onDrag($event, nodeType, 'NODETYPE')\" (dragover)=\"onDragOver($event)\"><img style=\"width: 32px; height: 32px\" src=\"{{nodeType.icon}}\" />\n\t\t\t\t\t\t\t\t<h3>{{nodeType.name}}</h3></li>\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tool-item\">\n\t\t\t\t\t<button style=\"width: 100%\" class=\"w3-theme-d2 w3-border-brown btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#toolbox_relations\" aria-expanded=\"false\" aria-controls=\"toolbox_relations\">\n\t\t\t\t\t\tRelationTypes<i class=\"fa fa-caret-down w3-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class=\"collapse toolbox\" id=\"toolbox_relations\">\n\t\t\t\t\t\t<ul id=\"relationTypesList\" class=\"list-group\" style=\"max-height: 300px; overflow: auto; padding: 5px\">\n\t\t\t\t\t\t\t<li class=\"warning-item, w3-pale-yellow\" *ngIf=\"repositories.length < 1\" disabled><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO REPOSITORY AVAILABLE</li>\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedRepository.name === 'Select Repository' && repositories.length > 0\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO RPOSITORY SELECTED</li>\n\t\t\t\t\t\t\t<li class=\"warning-item, w3-pale-yellow\" *ngIf=\"selectedRepository.name !== 'Select Repository' &&  selectedRepository.relationshipTypes.length < 1\" disabled><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO RELATIONSHIPTYPES AVAILABLE</li>\n\t\t\t\t\t\t\t<li class=\"relationshipType w3-round\" draggable=\"true\" *ngFor=\"let relationshipType of selectedRepository.relationshipTypes\" (drag)=\"onDrag($event, relationshipType, 'RELATIONSHIPTYPE')\" (dragover)=\"onDragOver($event)\"><img style=\"width: 32px; height: 32px\" src=\"{{relationshipType.icon}}\" />\n\t\t\t\t\t\t\t\t<h3>{{relationshipType.name}}</h3></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Complet draw area of the level graph -->\n\t\t<div id=\"draw_area\" class=\"w3-rest w3-theme-l5 scroll-panel\" (mousemove)=\"onDrawRelation($event)\">\n\n\t\t\t<svg id=\"parent\">\n\t\t\t\t\n\t\t\t\t<!-- Definition of the gradients of the nodes and the arrow of an edge -->\n\t\t\t\t\n\t\t\t    <defs>\n   \t\t\t\t\t<marker id=\"Triangle\" viewBox=\"0 0 10 10\" refX=\"80\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\n    \t\t\t\t  \t<path d=\"M 0 0 L 10 5 L 0 10 z\" />\n   \t\t\t\t\t</marker>\n \t\t\t\t</defs>\n \t\t\t\t\t \n\t\t\t\t<defs>\n   \t\t\t\t\t<marker id=\"TriangleDraw\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\n    \t\t\t\t  \t<path d=\"M 0 0 L 10 5 L 0 10 z\" />\n   \t\t\t\t\t</marker>\n \t\t\t\t</defs>\n \t\t\t\t\t \n\t\t\t\t<defs> \n\t\t\t\t\t<linearGradient id=\"lgrad\" x1=\"0%\" y1=\"51%\" x2=\"100%\" y2=\"49%\"> \n\t\t\t\t\t\t<stop offset=\"0%\" style=\"stop-color:rgb(0,51,51);stop-opacity:1\" />\n\t\t\t\t\t\t<stop offset=\"50%\" style=\"stop-color:rgb(5,193,255);stop-opacity:1\" />\n\t\t\t\t\t\t<stop offset=\"100%\" style=\"stop-color:rgb(0,51,51);stop-opacity:1\" />\n\t\t\t\t\t</linearGradient> \n\t\t\t\t</defs>\n\n\t\t\t\t<defs> \n\t\t\t\t\t<linearGradient id=\"lgradNodeType\" x1=\"49%\" y1=\"100%\" x2=\"51%\" y2=\"0%\"> \n\t\t\t\t\t\t<stop offset=\"0%\" style=\"stop-color:rgb(222,152,11);stop-opacity:1\" />\n<stop offset=\"25%\" style=\"stop-color:rgb(232,159,12);stop-opacity:1\" />\n<stop offset=\"50%\" style=\"stop-color:rgb(255,174,13);stop-opacity:1\" />\n<stop offset=\"75%\" style=\"stop-color:rgb(237,162,12);stop-opacity:1\" />\n<stop offset=\"100%\" style=\"stop-color:rgb(219,150,11);stop-opacity:1\" />\n\t\t\t\t\t</linearGradient> \n\t\t\t\t</defs>\n\t\t\t\t\n\t\t\t\t<defs> \n\t\t\t\t\t<linearGradient id=\"lgradRelationshipType\" x1=\"50%\" y1=\"100%\" x2=\"50%\" y2=\"0%\"> \n\t\t\t\t\t\t<stop offset=\"0%\" style=\"stop-color:rgb(0,128,0);stop-opacity:1\" />\n\t\t\t\t\t\t<stop offset=\"50%\" style=\"stop-color:rgb(27,252,15);stop-opacity:1\" />\n\t\t\t\t\t\t<stop offset=\"100%\" style=\"stop-color:rgb(0,128,0);stop-opacity:1\" />\n\t\t\t\t\t</linearGradient> \n\t\t\t\t</defs>\n\t\t\t\t\n\t\t\t\t\t<g *ngFor=\"let level of currentLevelGraph.levels.reverse()\">\n\t\t\t\t   \t\n\t\t\t\t   <g *ngIf=\"level.visible\">\n\t\t\t\t\t<svg (mousedown)=\"onDragOver($event)\" id=\"child\" [attr.id]=\"level.depth\" [attr.x]=\"50\" [attr.y]=\"level.y\" [attr.height]=\"level.height\" (dragover)=\"onDragOver($event)\" (drop)=\"onDrop($event, level)\"> \n\t\t\t\t   \t\t\t<rect class=\"level-panel\" [attr.x]=\"0\" [attr.y]=\"0\" [attr.height]=\"level.height\" (dragover)=\"onDragOver($event)\" (drop)=\"onDrop($event, level)\"></rect>\t\t\t\t\t\n\t\t\t\t</svg>\n\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t\t\n\t\t\t\t<!-- Polyline of the refineTo LevelGraphRelations -->\n\t\t\t\t<polyline *ngIf=\"drawRelation && currentLevelGraphRelation.levelGraphRelationType === 'REFINE_TO'\" [attr.points]=\"currentLevelGraphRelation.path.pathDataString\" style=\"fill:none;stroke:gray;stroke-width:6\" marker-end=\"url(#TriangleDraw)\" />\n\t\t\t\t\t\t\n\t\t\t\t<g [contextmenu]=\"[levelGraphRelationContextMenu, {levelGraphRelation: levelGraphRelation}]\" *ngFor=\"let levelGraphRelation  of currentLevelGraph.levelGraphRelations\">\n\t\t\t\t\t<polyline *ngIf=\"(levelGraphRelationTypes[1].checked == true) && (levelGraphRelation.levelGraphRelationType === 'REFINE_TO') && showRefineToRelation(levelGraphRelation)\" [attr.points]=\"levelGraphRelation.path.pathDataString\" style=\"fill:none;stroke:gray;stroke-width:6\" marker-end=\"url(#Triangle)\" />\n\t\t\t    \t<text *ngIf=\"(levelGraphRelationTypes[1].checked == true) && (levelGraphRelation.levelGraphRelationType === 'REFINE_TO') && showRefineToRelation(levelGraphRelation) && (levelGraphRelation.entryPoint)\" [attr.x]=\"(levelGraphRelation.path.points[0].x + levelGraphRelation.path.points[1].x)/ 2\" [attr.y]=\"(levelGraphRelation.path.points[0].y + levelGraphRelation.path.points[1].y)/ 2 - 10\" font-family=\"Verdana\" font-size=\"24\" fill=\"black\" text-anchor=\"middle\">Entry</text>\t\t\n\t\t\t\t\t<text *ngIf=\"(levelGraphRelationTypes[1].checked == true) && (levelGraphRelation.levelGraphRelationType === 'REFINE_TO') && showRefineToRelation(levelGraphRelation) && (levelGraphRelation.exitPoint)\" [attr.x]=\"(levelGraphRelation.path.points[0].x + levelGraphRelation.path.points[1].x)/ 2\" [attr.y]=\"(levelGraphRelation.path.points[0].y + levelGraphRelation.path.points[1].y)/ 2 + 30\" font-family=\"Verdana\" font-size=\"24\" fill=\"black\" text-anchor=\"middle\">Exit</text>\t\n\t\t\t    </g>\n\t\t\t\t\n\t\t\t\t<!-- Level Draw Area -->\t\t\t\t\n\t\t\t\t<g *ngFor=\"let level of currentLevelGraph.levels.reverse()\">\n\t\t\t\t   \t\n\t\t\t\t   <g *ngIf=\"level.visible\">\n\t\t\t\t   \t\t\n\t\t\t\t   \t\t<!-- Definition of the labels for the level draw areas-->\n\t\t\t\t   \t\t<rect [attr.x]=\"0\" [attr.y]=\"level.y\" [attr.width]=\"40\" [attr.height]=\"level.height\" fill=\"url(#lgrad)\"></rect>\n                   \t\t<text [attr.x]=\"20\" [attr.y]=\"level.y + level.height/2\" writing-mode=\"tb\" font-family=\"Verdana\" font-size=\"35\" fill=\"white\" text-anchor=\"middle\">Level {{level.depth}}</text> \n\t\t\t\t   \t\t\n\t\t\t\t   \t\t<!-- Definition of the move bar to change the height of the level draw areas-->\n\t\t\t\t   \t\t<rect class=\"level-move-bar\" [attr.x]=\"0\" [attr.y]=\"level.y + level.height + 10\" [attr.height]=\"20\" (mousedown)=\"startChangeLevelHeight($event)\" (mousemove)=\"onChangeLevelHeight($event, level)\" (mouseup)=\"stopChangeLevelHeight($event)\"></rect>\n\t\t\t\t\n\t\t\t\t\t\t<!-- Definition of the level draw areas-->    \t\t\n\t\t\t       \t\t<svg id=\"child\" [attr.id]=\"level.depth\" [attr.x]=\"50\" [attr.y]=\"level.y\" [attr.height]=\"level.height\"> \n\n\t\t\t\t\t\t\t<!-- Definition of the connectedToRelation-->\n\t\t\t\t\t \t\t<g [contextmenu]=\"[levelGraphRelationContextMenu, {levelGraphRelation: levelGraphRelation}]\" *ngFor=\"let levelGraphRelation  of currentLevelGraph.levelGraphRelations\">\n\t\t\t\t\t   \t\t\t<polyline *ngIf=\"(levelGraphRelationTypes[0].checked == true) && (level.depth === levelGraphRelation.sourceLevelDepth) && (levelGraphRelation.levelGraphRelationType === 'CONNECT_OVER_TO')\" [attr.points]=\"levelGraphRelation.path.pathDataString\" style=\"fill:none;stroke:green;stroke-width:6\" marker-end=\"url(#Triangle)\" />\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<polyline *ngIf=\"drawRelation && currentLevelGraphRelation.sourceLevelDepth === level.depth  && currentLevelGraphRelation.levelGraphRelationType === 'CONNECT_OVER_TO'\" [attr.points]=\"currentLevelGraphRelation.path.pathDataString\" style=\"fill:none;stroke:green;stroke-width:6\" marker-end=\"url(#TriangleDraw)\" />\n\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Definition of the RELATIONSHIPTYPEFRAGMENT-->\n\t\t\t\t\t\t\t<g [contextmenu]=\"[levelGraphNodeContextMenu, {levelGraphNode: levelGraphNode}]\" *ngFor=\"let levelGraphNode  of currentLevelGraph.levelGraphNodes\">\n\t\t\t\t\t\t\t\t<g *ngIf=\"((levelGraphNode.levelGraphNodeType === 'RELATIONSHIPTYPEFRAGMENT') && (levelGraphNode.levelId === level.id))\" (mousedown)=\"startMoveNode($event, levelGraphNode); startDrawRelation($event, level, levelGraphNode)\" (mousemove)=\"onMoveNode($event, level)\" (mouseup)=\"stopMoveNode($event); stopDrawRelation($event, levelGraphNode, level);\">\n\t\t\t\t\t\t\t\t    <rect rx=\"80\" ry=\"30\" [attr.id]=\"levelGraphNode.id\" [attr.x]=\"levelGraphNode.x\" [attr.y]=\"levelGraphNode.y\" [attr.width]=\"levelGraphNode.width\" [attr.height]=\"levelGraphNode.height\" fill=\"#C5E0B3\" style=\"stroke:black;stroke-width:5;\" />\n                                  \t\n\t\t\t\t\t\t\t\t\t<text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/4 + 15\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">{{levelGraphNode.name}}</text>\t\n\t\t\t\t\t\t\t\t\t<text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/2 + 10\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">(ID:{{levelGraphNode.id}})</text>\t\n\n\t\t\t\t\t\t\t\t\t<text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/1 - 10\" font-size=\"30\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">+</text>\t\n\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t    <image [attr.xlink:href]=\"levelGraphNode.icon\" [attr.x]=\"levelGraphNode.x + levelGraphNode.height/100 * 10\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/100 * 10\" [attr.width]=\"levelGraphNode.width/100 * 20\" [attr.height]=\"levelGraphNode.height/100 * 56\" />\n\t\t\t\t\t\t\t\t</g> \t\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Definition of the NODETYPEFRAGMENT-->\n\t\t\t\t\t\t\t<g [contextmenu]=\"[levelGraphNodeContextMenu, {levelGraphNode: levelGraphNode}]\" *ngFor=\"let levelGraphNode  of currentLevelGraph.levelGraphNodes\">\n\t\t\t\t\t\t\t\t<g *ngIf=\"((levelGraphNode.levelGraphNodeType === 'NODETYPEFRAGMENT') && (levelGraphNode.levelId === level.id))\" (mousedown)=\"startMoveNode($event, levelGraphNode); startDrawRelation($event, level, levelGraphNode)\" (mousemove)=\"onMoveNode($event, level)\" (mouseup)=\"stopMoveNode($event); stopDrawRelation($event, levelGraphNode, level);\">\n\t\t\t\t\t\t\t\t    <rect rx=\"80\" ry=\"30\" [attr.id]=\"levelGraphNode.id\" [attr.x]=\"levelGraphNode.x\" [attr.y]=\"levelGraphNode.y\" [attr.width]=\"levelGraphNode.width\" [attr.height]=\"levelGraphNode.height\" fill=\"#F7CBAC\" style=\"stroke:black;stroke-width:5;\" />\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/4 + 15\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">{{levelGraphNode.name}}</text>\t\n\t\t\t\t\t\t\t\t    <text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/2 + 15\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">(ID:{{levelGraphNode.id}})</text>\t\n\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t    <text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/1 - 10\" font-size=\"30\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">+</text>\t\n\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t    <image [attr.xlink:href]=\"levelGraphNode.icon\" [attr.x]=\"levelGraphNode.x + levelGraphNode.height/100 * 10\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/100 * 10\" [attr.width]=\"levelGraphNode.width/100 * 20\" [attr.height]=\"levelGraphNode.height/100 * 56\" />\n\t\t\t\t\t\t\t\t</g> \t\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Definition of the NODETYPE-->\n\t\t\t\t \t\t\t<g [contextmenu]=\"[levelGraphNodeContextMenu, {levelGraphNode: levelGraphNode}]\" *ngFor=\"let levelGraphNode  of currentLevelGraph.levelGraphNodes\">\n\t\t\t\t\t\t\t\t<g *ngIf=\"((levelGraphNode.levelGraphNodeType === 'NODETYPE') && (levelGraphNode.levelId === level.id))\" (mousedown)=\"startMoveNode($event, levelGraphNode); startDrawRelation($event, level, levelGraphNode)\" (mousemove)=\"onMoveNode($event, level)\" (mouseup)=\"stopMoveNode($event); stopDrawRelation($event, levelGraphNode, level);\">\n\t\t\t\t\t\t\t\t\t<rect rx=\"20\" ry=\"20\" [attr.id]=\"levelGraphNode.id\" [attr.x]=\"levelGraphNode.x\" [attr.y]=\"levelGraphNode.y\" [attr.width]=\"levelGraphNode.width\" [attr.height]=\"levelGraphNode.height\" fill=\"url(#lgradNodeType)\" style=\"stroke:black;stroke-width:5;\" />\n\t\t\t\t\t\t\t\t\t<text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/4 + 15\" [attr.height]=\"levelGraphNode.height\" [attr.width]=\"levelGraphNode.width\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">{{levelGraphNode.name}}</text> \t\t\n\t\t\t\t\t\t\t\t\t<text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/2 + 10\" [attr.height]=\"levelGraphNode.height\" [attr.width]=\"levelGraphNode.width\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">(ID:{{levelGraphNode.id}})</text> \t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t    <image [attr.xlink:href]=\"levelGraphNode.icon\" [attr.x]=\"levelGraphNode.x + levelGraphNode.height/100 * 10\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/100 * 10\" [attr.width]=\"levelGraphNode.width/100 * 20\" [attr.height]=\"levelGraphNode.height/100 * 56\" />\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<rect rx=\"0\" ry=\"0\" [attr.x]=\"levelGraphNode.x\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/3 * 2\" [attr.width]=\"levelGraphNode.width\" [attr.height]=\"levelGraphNode.height/3\" fill=\"white\" style=\"stroke:black;stroke-width:5;\" />\n\t\t\t\t\t                <text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/4 * 3 + 20\" font-family=\"Verdana\" font-size=\"24\" fill=\"black\" text-anchor=\"middle\">(NodeType ID:{{levelGraphNode.levelGraphNodeTypeId}})</text>\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Definition of the RELATIONSHIPTYPE-->\n\t\t\t\t\t\t\t<g draggable=\"false\" [contextmenu]=\"[levelGraphNodeContextMenu, {levelGraphNode: levelGraphNode}]\" *ngFor=\"let levelGraphNode  of currentLevelGraph.levelGraphNodes\">\n\t\t\t\t\t\t\t\t<g draggable=\"false\" *ngIf=\"((levelGraphNode.levelGraphNodeType === 'RELATIONSHIPTYPE') && (levelGraphNode.levelId === level.id))\" (mousedown)=\"startMoveNode($event, levelGraphNode); startDrawRelation($event, level, levelGraphNode)\" (mousemove)=\"onMoveNode($event, level)\" (mouseup)=\"stopMoveNode($event); stopDrawRelation($event, levelGraphNode, level);\">\n\t\t\t\t\t\t\t\t\t<rect rx=\"20\" ry=\"20\" [attr.id]=\"levelGraphNode.id\" [attr.x]=\"levelGraphNode.x\" [attr.y]=\"levelGraphNode.y\" [attr.width]=\"levelGraphNode.width\" [attr.height]=\"levelGraphNode.height\" fill=\"url(#lgradRelationshipType)\" style=\"stroke:black;stroke-width:5;\" />\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/4 + 15\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">{{levelGraphNode.name}}</text>\t\n\t\t\t\t\t\t\t\t    <text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2 + levelGraphNode.height/100 * 35\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/2 + 10\" font-size=\"24\" font-family=\"Verdana\" fill=\"black\" text-anchor=\"middle\">(ID:{{levelGraphNode.id}})</text>\t\n\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t    <image [attr.xlink:href]=\"levelGraphNode.icon\" [attr.x]=\"levelGraphNode.x + levelGraphNode.height/100 * 10\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/100 * 10\" [attr.width]=\"levelGraphNode.width/100 * 20\" [attr.height]=\"levelGraphNode.height/100 * 56\" />\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<rect rx=\"0\" ry=\"0\" [attr.x]=\"levelGraphNode.x\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/3 * 2\" [attr.width]=\"levelGraphNode.width\" [attr.height]=\"levelGraphNode.height/3\" fill=\"white\" style=\"stroke:black;stroke-width:5;\" />\n\t\t\t\t\t                <text [attr.x]=\"levelGraphNode.x + levelGraphNode.width/2\" [attr.y]=\"levelGraphNode.y + levelGraphNode.height/4 * 3 + 20\" font-family=\"Verdana\" font-size=\"24\" fill=\"black\" text-anchor=\"middle\">(RelationshipType ID:{{levelGraphNode.levelGraphNodeTypeId}})</text>\t\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\t\n           </svg>\n\t\t</div>\n\t</div>\n</div>\n\n<contextmenu #levelGraphNodeContextMenu>\n<div class=\"dropdown open\">\n\t<ul class=\"dropdown-menu\">\n\t\t<!-- \t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createExpectedProperty\" (click)=\"setEntity(levelGraphNodeContextMenu.get('levelGraphNode'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Add ExpectedProperty</a></li>\n -->\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createProvidedProperty\" (click)=\"setEntity(levelGraphNodeContextMenu.get('levelGraphNode'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Add ProvidedProperty</a></li>\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#editLevelGraphNodeName\" (click)=\"setLevelGraphNode(levelGraphNodeContextMenu.get('levelGraphNode'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Edit Name</a></li>\n\t\t<li><a class=\"dropdown-item\" routerLink=\"/dashboard/levelgraphnodedetails\" [queryParams]=\"{id: levelGraphNodeContextMenu.get('levelGraphNode').id}\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View Details</a></li>\n\t\t<li><a class=\"dropdown-item\" (click)=\"deleteLevelGraphNode(levelGraphNodeContextMenu.get('levelGraphNode'))\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</a></li>\n\t</ul>\n</div>\n</contextmenu>\n\n<contextmenu #levelGraphRelationContextMenu>\n<div class=\"dropdown open\">\n\t<ul class=\"dropdown-menu\">\n\t\t<li><a *ngIf=\"levelGraphRelationContextMenu.get('levelGraphRelation').levelGraphRelationType === 'REFINE_TO' && isEntryExitRelation(levelGraphRelationContextMenu.get('levelGraphRelation'))\" class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#setExitEntryModal\" (click)=\"setLevelGraphRelation(levelGraphRelationContextMenu.get('levelGraphRelation'))\"><i class=\"fa fa-eye\"\n\t\t\t\taria-hidden=\"true\"></i>Set Entry/Exit Point</a></li>\n\t\t<!-- <li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createExpectedProperty\" (click)=\"setEntity(levelGraphRelationContextMenu.get('levelGraphRelation'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Add ExpectedProperty</a></li>\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createProvidedProperty\" (click)=\"setEntity(levelGraphRelationContextMenu.get('levelGraphRelation'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Add ProvidedProperty</a></li>\n\t\t -->\n\t\t<li><a class=\"dropdown-item\" routerLink=\"/dashboard/levelgraphrelationdetails\" [queryParams]=\"{id: levelGraphRelationContextMenu.get('levelGraphRelation').id}\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View Details</a></li>\n\t\t<li><a class=\"dropdown-item\" (click)=\"deleteLevelGraphRelation(levelGraphRelationContextMenu.get('levelGraphRelation'))\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</a></li>\n\t</ul>\n</div>\n</contextmenu>\n\n<!-- Modal for Create ProvidedProperty -->\n<div class=\"modal fade modal-position\" id=\"createProvidedProperty\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Create ProvidedProperty</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty=\"ngModel\" name=\"name\" [(ngModel)]=\"createdProvidedProperty.name\" #nameProperty type=\"text\" class=\"form-control\" id=\"nameProperty\" value=\"{{createdProvidedProperty.name}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"nameProperty.errors && (nameProperty.dirty || nameProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!nameProperty.errors.required\">Name is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty=\"ngModel\" name=\"value\" [(ngModel)]=\"createdProvidedProperty.value\" #valueProperty type=\"text\" class=\"form-control\" id=\"valueProperty\" value=\"{{createdProvidedProperty.value}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"valueProperty.errors && (valueProperty.dirty || valueProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!valueProperty.errors.required\">Value is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addProvidedProperty()\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Modal for ExpectedProperty -->\n<div class=\"modal fade modal-position\" id=\"createExpectedProperty\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Create ExpectedProperty</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty=\"ngModel\" name=\"name\" [(ngModel)]=\"createdExpectedProperty.name\" #nameProperty type=\"text\" class=\"form-control\" id=\"nameProperty\" value=\"{{createdExpectedProperty.name}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"nameProperty.errors && (nameProperty.dirty || nameProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!nameProperty.errors.required\">Name is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty=\"ngModel\" name=\"value\" [(ngModel)]=\"createdExpectedProperty.value\" #valueProperty type=\"text\" class=\"form-control\" id=\"valueProperty\" value=\"{{createdExpectedProperty.value}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"valueProperty.errors && (valueProperty.dirty || valueProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!valueProperty.errors.required\">Value is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addExpectedProperty()\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Modal for Exit Entry -->\n<div class=\"modal fade modal-position\" id=\"setExitEntryModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Set Entry and Exit Point</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"input-panel\">\n\t\t\t\t<form>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label>EntryPoint: </label> <label class=\"radio-inline\"><input type=\"radio\" name=\"entryPoint\" value=\"true\" [(ngModel)]=\"entryPoint\" [checked]=\"entryPoint\">Yes</label> <label class=\"radio-inline\"><input [(ngModel)]=\"entryPoint\" [checked]=\"!entryPoint\" type=\"radio\" name=\"entryPoint\" value=\"false\">No</label>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label>ExitPoint: </label> <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"exitPoint\" name=\"exitPoint\" value=\"true\" [checked]=\"exitPoint\">Yes</label> <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"exitPoint\" name=\"exitPoint\" value=\"false\" [checked]=\"!exitPoint\">No</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"setEntryExitProperty()\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Modal for Edit LevelGraphName-->\n<div class=\"modal fade modal-position\" id=\"editLevelGraphNodeName\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Level Graph Node Name</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name: </label> <input #editName type=\"text\" class=\"form-control\" id=\"name\" value=\"{{currentLevelGraphNode.name}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"editLevelGraphNodeName(editName.value)\" data-dismiss=\"modal\">Save</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_types_nodetype__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - NodeTypeService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for Node Types
 *
 *********************************************************************************************************************************************************************************************************/
var NodeTypeService = NodeTypeService_1 = (function () {
    function NodeTypeService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.nodetypeUrl = '/api/nodetypes';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getNodeTypes - Send GET all NodeTypes REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.getNodeTypes = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETYPE] Send GET Node Types Request', NodeTypeService_1.name);
        return this.http.get(this.nodetypeUrl).map(this.extractNodeTypes).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getNodeType - Send GET NodeType REQUEST
     *
     * @param - id: number - ID of the NodeType which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.getNodeType = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETYPE] Send GET Node Type Request with ID:' + id, NodeTypeService_1.name);
        return this.http.get(this.nodetypeUrl + '/' + id).map(this.extractNodeType).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createNodeType - Send POST NodeType REQUEST
     *
     * @param - nodeType: NodeType - NodeType which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.createNodeType = function (nodeType) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETYPE] Send POST Node Type Request', NodeTypeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - NODETYPE]' + JSON.stringify(nodeType), NodeTypeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.nodetypeUrl, nodeType, options).map(this.extractNodeType).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateNodeType - Send PUT NodeType REQUEST
     *
     * @param - nodeType: NodeType - NodeType which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.updateNodeType = function (nodeType) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETYPE] Send PUT NodeType Request', NodeTypeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - NODETYPE] ' + JSON.stringify(nodeType), NodeTypeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.nodetypeUrl + '/' + nodeType.id, nodeType, options).map(this.extractNodeType).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - Send DELETE NodeType REQUEST
     *
     * @param - id: number - ID of the NodeType which should be deleted from the database
     *
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.deleteNodeType = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - NODETYPE] Send DELETE NodeType Request with ID: ' + id, NodeTypeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.nodetypeUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractNodeTypes - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.extractNodeTypes = function (res) {
        var body = res.json();
        var nodeTypeList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - NODETYPE]: Extract Data of Response Body', NodeTypeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - NODETYPE]: ' + JSON.stringify(body), NodeTypeService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var nodeType = body_1[_i];
            var tempNodeType = new __WEBPACK_IMPORTED_MODULE_1__datamodels_types_nodetype__["a" /* NodeType */]();
            tempNodeType = nodeType;
            nodeTypeList.push(tempNodeType);
        }
        return nodeTypeList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractNodeTypes - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.extractNodeType = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - NODETYPE]: Extract Data of Response Body', NodeTypeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[RESPONSE - NODETYPE]: ' + JSON.stringify(body), NodeTypeService_1.name);
        var nodeType = new __WEBPACK_IMPORTED_MODULE_1__datamodels_types_nodetype__["a" /* NodeType */]();
        nodeType = body;
        return nodeType || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    NodeTypeService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return NodeTypeService;
}());
NodeTypeService = NodeTypeService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], NodeTypeService);

var NodeTypeService_1, _a;
//# sourceMappingURL=nodetype.service.js.map

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphTool Component -->\r\n<div class=\"dashboard_area\">\r\n\t\r\n\t<!-- Header -->\r\n\t<div class=\"w3-theme-d4 w3-card-4 heading\">\r\n\t\t<h2>Level Graph Tool</h2>\r\n\t</div>\r\n\t\r\n\t<div class=\"rounded w3-theme-d2 panel\">\r\n\t\t<!-- Selector for LevelGraphComponent -->\r\n\t\t<app-levelgraph [levelGraphs]=\"levelGraphs\"></app-levelgraph>\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<!-- TopologyTemplate Modeller -->\n<div id=\"level_graph_tool\" class=\"container-fluid w3-theme-l3\">\n\n\t<!-- Header Row-->\n\t<div class=\"row\">\n\n\t\t<div class=\"col-sm-12 w3-theme-d3 w3-card-4 heading\">\n\n\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tTopology Template Name: <input disabled style=\"color: black\" value=\"{{currentTopologyTemplate.name}}\" />\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tTopology Template ID: <input disabled style=\"color: black\" value=\"{{currentTopologyTemplate.id}}\" />\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"w3-right col-sm-2 row\">\n\t\t\t\t\t<button [disabled]=\"this.levelGraphs.length < 1\" class=\"btn btn-primary w3-green\" type=\"button\" data-toggle=\"modal\" data-target=\"#refinementModal\" (click)=\"setUsedLevelGraphs()\">Start Refinement</button>\n\t\t\t\t\t<label *ngIf=\"this.levelGraphs.length < 1\" class=\"w3-pale-yellow\"> <i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>No LevelGraph for Refinement Available\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<!-- Refinement -->\n\t\t\t<div class=\"col-sm-12 w3-center control-group\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<button [disabled]=\"currentTopologyTemplate.parentTopologyTemplateId === undefined || currentTopologyTemplate.parentTopologyTemplateId === null\" class=\"btn w3-green\" (click)=\"loadAbstractTopologyTemplates()\" style=\"color: black\">\n\t\t\t\t\t\t<i class=\"fa fa-arrow-up icon\" aria-hidden=\"true\">Abstract Topology</i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<button [disabled]=\"currentTopologyTemplates.length < 1 || currentTopologyTemplates.indexOf(currentTopologyTemplate) - 1 < 0\" class=\"btn btn-default  btn-circle w3-green\" type=\"button\" (click)=\"prevTopology()\">\n\t\t\t\t\t\t<i class=\"fa fa-arrow-left icon\" aria-hidden=\"true\">Prev Topology</i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<input id=\"abstractionLevel\" class=\" w3-center\" style=\"color: black\" disabled value=\"Abstraction Level: {{currentTopologyTemplate.abstractionLevel}}\" />\n\t\t\t\t\t<button [disabled]=\"currentTopologyTemplates.length <= 1 || currentTopologyTemplates.indexOf(currentTopologyTemplate) + 1 >= currentTopologyTemplates.length\" class=\"btn btn-default w3-green\" type=\"button\" (click)=\"nextTopology()\">\n\t\t\t\t\t\t<i class=\"icon fa fa-arrow-right\" aria-hidden=\"true\">Next Topology</i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<button [disabled]=\"currentTopologyTemplate.childTopologyTemplates.length < 1\" class=\"btn w3-green\" (click)=\"loadSpecificTopologyTemplates()\" style=\"color: black\">\n\t\t\t\t\t\t<i class=\"fa fa-arrow-down icon\" aria-hidden=\"true\">Specific Topology</i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t<button id=\"saveBtn\" class=\"btn btn-primary w3-right w3-green btn-10\" type=\"button\" (click)=\"updateTopologyTemplate()\">\n\t\t\t\t\t\t<i class=\"icon fa fa-floppy-o\" aria-hidden=\"true\"></i>Save\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" style=\"height: 100%\">\n\n\t\t<!-- Tool Box -->\n\t\t<div id=\"toolbox_area\" class=\"w3-card-4 w3-col w3-theme\">\n\n\t\t\t<h5 class=\"w3-center w3-margin\">\n\t\t\t\t<b>Tool Box</b>\n\t\t\t</h5>\n\n\t\t\t<!-- Repository Tool Box -->\n\t\t\t<div class=\"toolbox-group\">\n\t\t\t\t<div class=\"w3-pale-yellow\">\n\t\t\t\t\t<i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">If you use Node Types from one or more selected repositories, you may model Level Graph Topology Templates which are not Level Graph Compliant</i>\n\t\t\t\t</div>\n\t\t\t\t<label>Selected Repository:</label>\n\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t<button id=\"selectRepository\" class=\" w3-theme-d2 btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">{{selectedRepository.name}}</button>\n\n\t\t\t\t\t<ul class=\"list dropdown-menu\" style=\"width: 100%;\">\n\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"repositories.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO REPOSITORY AVAILABLE</li>\n\t\t\t\t\t\t<li class=\"listItem\" *ngFor=\"let repository of repositories\" (click)=\"onSelectRepository(repository)\">{{ repository.name }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<button style=\"width: 100%\" class=\"w3-theme-d2 w3-border-brown btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#toolbox_nodes\" aria-expanded=\"false\" aria-controls=\"toolbox_nodes\">\n\t\t\t\t\tNodeTypes<i class=\"fa fa-caret-down w3-right\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\n\t\t\t\t<div class=\"collapse toolbox\" id=\"toolbox_nodes\">\n\t\t\t\t\t<ul class=\"list list-group\">\n\n\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedRepository.name === 'Select Repository' && repositories.length > 0\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO RPOSITORY SELECTED</li>\n\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"repositories.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO REPOSITORY AVAILABLE</li>\n\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedRepository.nodeTypes.length < 1 && selectedRepository.name !== 'Select Repository'\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO NODETYPES AVAILABLE</li>\n\t\t\t\t\t\t<li class=\"nodeTemplate w3-round\" draggable=\"true\" *ngFor=\"let nodeType of selectedRepository.nodeTypes\" (drag)=\" onDragNodeType($event, nodeType)\" (dragover)=\"onDragOver($event)\"><img style=\"width: 32px; height: 32px\" src=\"{{nodeType.icon}}\" />\n\t\t\t\t\t\t\t<h3>{{nodeType.name}}</h3></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<!-- Level Graph Tool Box -->\n\t\t\t<div class=\"toolbox-group\">\n\n\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t<button id=\"selcetLevelGraph\" class=\" w3-theme-d2 btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">{{selectedLevelGraph.name}}</button>\n\n\t\t\t\t\t<ul class=\"list dropdown-menu\" style=\"width: 100%;\">\n\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"levelGraphs.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO LEVEL GRAPH AVAILABLE</li>\n\t\t\t\t\t\t<li class=\"listItem\" *ngFor=\"let levelGraph of levelGraphs\" (click)=\"onSelectLevelGraph(levelGraph)\">{{ levelGraph.name }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tool-item\">\n\n\t\t\t\t\t<button style=\"width: 100%\" class=\"w3-theme-d2 w3-border-brown btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#levelGraph_compliantNodeTypes\" aria-expanded=\"false\" aria-controls=\"levelGraph_nodeTypes\">\n\t\t\t\t\t\tLevel {{currentTopologyTemplate.abstractionLevel}} NodeTypes<i class=\"fa fa-caret-down w3-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class=\"collapse toolbox\" id=\"levelGraph_compliantNodeTypes\">\n\t\t\t\t\t\t<ul class=\"list list-group\">\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name === 'Select Level Graph' && levelGraphs.length > 0\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO LEVEL GRAPH SELECTED</li>\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name === 'Select Level Graph' && levelGraphs.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO LEVEL GRAPH AVAILABLE</li>\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name !== 'Select Level Graph' && selectedLevelGraphNodeNodeTypeCurrentAbstractionLevel.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO NODETYPES AVAILABLE</li>\n\t\t\t\t\t\t\t<li class=\"nodeTemplate w3-round\" draggable=\"true\" *ngFor=\"let levelGraphNode of selectedLevelGraphNodeNodeTypeCurrentAbstractionLevel\" (drag)=\"onDragLevelGraphNode($event, levelGraphNode)\" (dragover)=\"onDragOver($event)\"><img style=\"width: 32px; height: 32px\" src=\"{{levelGraphNode.icon}}\" />\n\t\t\t\t\t\t\t\t<h3>{{levelGraphNode.name}}</h3></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"w3-pale-yellow\">\n\t\t\t\t\t<i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">If you use Node Types from one/multiple selected LevelGraphs, you can model Topology Templates which are Single Level Single/Multiple Graph - Compliant</i>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tool-item\">\n\t\t\t\t\t<button style=\"width: 100%\" class=\"w3-theme-d2 w3-border-brown btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#levelGraph_nodeTypes\" aria-expanded=\"false\" aria-controls=\"levelGraph_nodeTypes\">\n\t\t\t\t\t\tAll NodeTypes<i class=\"fa fa-caret-down w3-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class=\"collapse toolbox\" id=\"levelGraph_nodeTypes\">\n\t\t\t\t\t\t<ul class=\"list list-group\">\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name === 'Select Level Graph' && levelGraphs.length > 0\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO LEVEL GRAPH SELECTED</li>\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name === 'Select Level Graph' && levelGraphs.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO LEVEL GRAPH AVAILABLE</li>\n\t\t\t\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name !== 'Select Level Graph' && selectedLevelGraphNodeNodeType.length < 1\" disabled><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>NO NODETYPES AVAILABLE</li>\n\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let levelGraphNode of selectedLevelGraphNodeNodeType\">\n\n\t\t\t\t\t\t\t<li class=\"nodeTemplate w3-round\" draggable=\"true\" *ngIf=\"(levelGraphNode.levelGraphNodeType === 'NODETYPE')\" (drag)=\"onDragLevelGraphNode($event, levelGraphNode)\" (dragover)=\"onDragOver($event)\"><img style=\"width: 32px; height: 32px\" src=\"{{levelGraphNode.icon}}\" />\n\t\t\t\t\t\t\t\t<h3>{{levelGraphNode.name}}</h3></li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"w3-pale-yellow\">\n\t\t\t\t\t<i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">If you use Node Types from one/multiple selected Level Graphs, you may model Topology Templates which are Single/Multiple-Graph Compliant</i>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Draw area container -->\n\t\t<div id=\"draw_area\" class=\"w3-rest w3-theme-l5 scroll-panel\" (mousemove)=\"onDrawLevelGraphRelation($event)\">\n\n\t\t\t<!-- svg container for display svg elements like rect, line, polyline etc. -->\n\t\t\t<svg (dragover)=\"onDragOver($event)\" (drop)=\"onDrop($event)\">\n\t\t\t\t\n\t\t\t\t<!-- Definition of gradients of the node Template and of the arrows of the polyline -->\n\t\t\t\t<defs>\n   \t\t\t\t\t<marker id=\"TriangleEnd\" viewBox=\"0 0 10 10\" refX=\"80\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\n    \t\t\t\t  \t<path d=\"M 0 0 L 10 5 L 0 10 z\" />\n   \t\t\t\t\t</marker>\n \t\t\t\t</defs> \n \t\t\t\t\t \n \t\t\t\t<defs>\n   \t\t\t\t\t<marker id=\"TriangleEndDraw\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\n    \t\t\t\t  \t<path d=\"M 0 0 L 10 5 L 0 10 z\" />\n   \t\t\t\t\t</marker>\n \t\t\t\t</defs>\n \t\t\t\t\n \t\t\t\t<defs> \n\t\t\t\t\t<linearGradient id=\"nodeTemplate\" x1=\"49%\" y1=\"100%\" x2=\"51%\" y2=\"0%\"> \n\t\t\t\t\t<stop offset=\"0%\" style=\"stop-color:rgb(143,193,242);stop-opacity:1\" />\n\t\t\t\t\t<stop offset=\"50%\" style=\"stop-color:rgb(123,166,209);stop-opacity:1\" />\n\t\t\t\t\t<stop offset=\"100%\" style=\"stop-color:rgb(143,193,242);stop-opacity:1\" />\n\t\t\t\t\t</linearGradient> \n\t\t\t\t</defs>\n\t\t\t\t\n\t\t\t\t<!-- Draw Line witch is enabled if you draw a relation to display the currentDrawRelation -->\n\t\t\t\t<polyline *ngIf=\"drawRelation || drawCurrentLevelGraphRelation || drawCurrentLevelGraphCompliantRelation\" [attr.points]=\"currentRelationshipTemplate.path.pathDataString\" style=\"fill:none;stroke:black;stroke-width:6\" marker-end=\"url(#TriangleEndDraw)\">\n\t\t\t\t\t       <marker href=\"#TriangleEnd\" position=\"175px\" />\n\t\t\t\t</polyline>\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<!-- Relationship Template -->\n<!-- \t\t\t\t[contextmenu]=\"[relationshipTemplateContextMenu, {relationshipTemplate: relationshipTemplate}]\"\n -->\t\t\t \t<g  *ngFor=\"let relationshipTemplate of currentTopologyTemplate.relationshipTemplates\">\n\t\t\t\t\t    <polyline [attr.points]=\"relationshipTemplate.path.pathDataString\" style=\"fill:none;stroke:black;stroke-width:6\" marker-end=\"url(#TriangleEnd)\">\n\t\t\t\t\t    \n\t\t\t\t\t    </polyline>\n\t\t\t\t\t    \t<text [attr.x]=\"(relationshipTemplate.path.points[0].x + relationshipTemplate.path.points[1].x)/ 2\" [attr.y]=\"(relationshipTemplate.path.points[0].y + relationshipTemplate.path.points[1].y)/ 2 - 10\" font-family=\"Verdana\" font-size=\"24\" fill=\"black\" text-anchor=\"middle\">{{relationshipTemplate.name}} (ID:{{relationshipTemplate.id}})</text>\t\t\n\t\t\t\t\t        <text [attr.x]=\"(relationshipTemplate.path.points[0].x + relationshipTemplate.path.points[1].x)/ 2\" [attr.y]=\"(relationshipTemplate.path.points[0].y + relationshipTemplate.path.points[1].y)/ 2 + 30\" font-family=\"Verdana\" font-size=\"24\" fill=\"black\" text-anchor=\"middle\">(RelationshipType ID:{{relationshipTemplate.relationshipTypeId}})</text>\t\n\t\t\t\t</g>\n\t\t\t\t\n\t\t\t\t<!-- Node Template -->\n<!-- \t\t\t\t[contextmenu]=\"[nodeTemplateContextMenu, {nodeTemplate: nodeTemplate}]\"\n -->\t\t\t\t<g *ngFor=\"let nodeTemplate of currentTopologyTemplate.nodeTemplates\" (mouseup)=\"stopDrawLevelGraphRelation(nodeTemplate)\" (mousedown)=\"startMoveNode($event, nodeTemplate); setCurrentLevelGraphCompliantRelationshipTypes($event, nodeTemplate.levelGraphNodeId)\" (mousemove)=\"onMoveNode($event)\"\n\t\t\t\t\t(mouseup)=\"stopMoveNode($event)\">\n\t\t\t\t\t<rect rx=\"20\" ry=\"20\" [attr.id]=\"nodeTemplate.id\" [attr.x]=\"nodeTemplate.x\" [attr.y]=\"nodeTemplate.y\" [attr.width]=\"nodeTemplate.width\" [attr.height]=\"nodeTemplate.height\" fill=\"url(#nodeTemplate)\" style=\"stroke:black;stroke-width:5;\" />\t\t\t\t    \n\t\t\t\t    <image [attr.xlink:href]=\"nodeTemplate.icon\" [attr.x]=\"nodeTemplate.x + nodeTemplate.height/100 * 10\" [attr.y]=\"nodeTemplate.y + nodeTemplate.height/100 * 10\" [attr.width]=\"nodeTemplate.width/100 * 20\" [attr.height]=\"nodeTemplate.height/100 * 56\" />\t\t\t\n\t\t\t\t\t<text [attr.x]=\"nodeTemplate.x + nodeTemplate.width/2 + nodeTemplate.height/100 * 35\" [attr.y]=\"nodeTemplate.y + nodeTemplate.height/4 + 15\" font-family=\"Verdana\" font-size=\"20\" fill=\"white\" text-anchor=\"middle\">{{nodeTemplate.name}} (ID:{{nodeTemplate.id}})</text>\t\t\n                    <rect rx=\"0\" ry=\"0\" [attr.x]=\"nodeTemplate.x\" [attr.y]=\"nodeTemplate.y + nodeTemplate.height/3 * 2\" [attr.width]=\"nodeTemplate.width\" [attr.height]=\"nodeTemplate.height/3\" fill=\"white\" style=\"stroke:black;stroke-width:5;\" />\n\t\t\t\t\t<text [attr.x]=\"nodeTemplate.x + nodeTemplate.width/2\" [attr.y]=\"nodeTemplate.y + nodeTemplate.height/4 * 3 + 20\" font-family=\"Verdana\" font-size=\"24\" fill=\"black\" text-anchor=\"middle\">(NodeType ID:{{nodeTemplate.nodeTypeId}})</text>\t\n\t\t\t\t</g>\n\t\t\t\t\t\n           </svg>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Node Template context menu \n<contextmenu #nodeTemplateContextMenu>\n<div class=\"dropdown open\">\n\t<ul class=\"dropdown-menu\">\n\t\t<li class=\"dropdown-submenu\"><a class=\"dropdown-item\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>Repository RelationshipTypes</a>\n\t\t\t<ul tabindex=\"-1\" class=\"dropdown-menu\">\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedRepository.name === 'Select Repository'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO REPOSITORY SELECTED</i></li>\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedRepository.relationshipTypes.length < 1 && selectedRepository.name !== 'Select Repository'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO RELATIONSHIPTYPE AVAILABE</i></li>\n\t\t\t\t<li *ngFor=\"let relationshipType of selectedRepository.relationshipTypes\"><a class=\"dropdown-item\" tabindex=\"-1\" (click)=\"startDrawRelation($event, relationshipType, nodeTemplateContextMenu.get('nodeTemplate'))\">{{relationshipType.name}} (ID: {{relationshipType.id}})</a></li>\n\t\t\t</ul></li>\n\n\t\t<li class=\"dropdown-submenu\"><a class=\"dropdown-item\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>Level Graph RelationshipTypes</a>\n\t\t\t<ul tabindex=\"-1\" class=\"dropdown-menu\">\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name === 'Select LevelGraph'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO LEVEL GRAPH SELECTED</i></li>\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraphNodeRelationType.length < 1 && selectedLevelGraph.name !== 'Select LevelGraph'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO RELATIONSHIPTYPE AVAILABEL</i></li>\n\t\t\t\t<li *ngFor=\"let levelGraphNode of selectedLevelGraphNodeRelationType\"><a class=\"dropdown-item\" tabindex=\"-1\" (click)=\"startDrawCurrentLevelGraphRelation($event, levelGraphNode, nodeTemplateContextMenu.get('nodeTemplate'))\">{{levelGraphNode.name}} (ID: {{levelGraphNode.id}})</a></li>\n\t\t\t</ul></li>\n\n\t\t<li class=\"dropdown-submenu\"><a class=\"dropdown-item\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>Level {{currentTopologyTemplate.abstractionLevel}} RelationshipTypes</a>\n\t\t\t<ul tabindex=\"-1\" class=\"dropdown-menu\">\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name === 'Select LevelGraph'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO LEVEL GRAPH SELECTED</i></li>\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraphNodeRelationTypeCurrentAbstractionLevel.length < 1 && selectedLevelGraph.name !== 'Select LevelGraph'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO RELATIONSHIPTYPE AVAILABEL</i></li>\n\t\t\t\t<li *ngFor=\"let levelGraphNode of selectedLevelGraphNodeRelationTypeCurrentAbstractionLevel\"><a class=\"dropdown-item\" tabindex=\"-1\" (click)=\"startDrawCurrentLevelGraphRelation($event, levelGraphNode, nodeTemplateContextMenu.get('nodeTemplate'))\">{{levelGraphNode.name}} (ID: {{levelGraphNode.id}})</a></li>\n\t\t\t</ul></li>\n\n\t\t<li class=\"dropdown-submenu\"><a class=\"dropdown-item\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>Level Graph Compliant Relation</a>\n\t\t\t<ul tabindex=\"-1\" class=\"dropdown-menu\">\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"selectedLevelGraph.name === 'Select LevelGraph'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO LEVEL GRAPH SELECTED</i></li>\n\t\t\t\t<li class=\"w3-pale-yellow\" *ngIf=\"currentLevelGraphCompliantRelationshipTypes.length < 1 && selectedLevelGraph.name !== 'Select LevelGraph'\"><i class=\"icon fa fa-exclamation-triangle\" aria-hidden=\"true\">NO RELATIONSHIPTYPE AVAILABEL</i></li>\n\t\t\t\t<li *ngFor=\"let levelGraphNode of currentLevelGraphCompliantRelationshipTypes\"><a class=\"dropdown-item\" tabindex=\"-1\" (click)=\"startDrawCurrentLevelGraphCompliantRelation($event, levelGraphNode, nodeTemplateContextMenu.get('nodeTemplate'))\">{{levelGraphNode.name}} (ID: {{levelGraphNode.id}})</a></li>\n\t\t\t</ul></li>\n\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createExpectedProperty\" (click)=\"setEntity(nodeTemplateContextMenu.get('nodeTemplate'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Expected Property</a></li>\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createProvidedProperty\" (click)=\"setEntity(nodeTemplateContextMenu.get('nodeTemplate'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Provided Property</a></li>\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#editNodeTemplateName\" (click)=\"setNodeTemplate(nodeTemplateContextMenu.get('nodeTemplate'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Edit Name</a></li>\n\t\t<li><a class=\"dropdown-item\" routerLink=\"/dashboard/nodetemplatedetails\" [queryParams]=\"{id: nodeTemplateContextMenu.get('nodeTemplate').id}\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View Details</a></li>\n\t\t<li><a class=\"dropdown-item\" (click)=\"deleteNodeTemplate(nodeTemplateContextMenu.get('nodeTemplate'))\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</a></li>\n\t</ul>\n</div>\n</contextmenu>\n\n  Relationship Template context menu \n<contextmenu #relationshipTemplateContextMenu>\n<div class=\"dropdown open\">\n\t<ul class=\"dropdown-menu\">\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createExpectedProperty\" (click)=\"setEntity(relationshipTemplateContextMenu.get('relationshipTemplate'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Expected Property</a></li>\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#createProvidedProperty\" (click)=\"setEntity(relationshipTemplateContextMenu.get('relationshipTemplate'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Provided Property</a></li>\n\t\t<li><a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#editRelationshipTemplateName\" (click)=\"setRelationshipTemplate(relationshipTemplateContextMenu.get('relationshipTemplate'))\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Edit Name</a></li>\n\t\t<li><a class=\"dropdown-item\" routerLink=\"/dashboard/relationshiptemplatedetails\" [queryParams]=\"{id: relationshipTemplateContextMenu.get('relationshipTemplate').id}\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View Details</a></li>\n\t\t<li><a class=\"dropdown-item\" (click)=\"deleteRelationshipTemplate(relationshipTemplateContextMenu.get('relationshipTemplate'))\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</a></li>\n\t</ul>\n</div>\n</contextmenu> -->\n\n\n<!-- Modal for Create ProvidedProperty -->\n<div class=\"modal fade modal-position\" id=\"createProvidedProperty\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Create ProvidedProperty</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty=\"ngModel\" name=\"name\" [(ngModel)]=\"createProvidedProperty.name\" #nameProperty type=\"text\" class=\"form-control\" id=\"nameProperty\" value=\"{{createProvidedProperty.name}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"nameProperty.errors && (nameProperty.dirty || nameProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!nameProperty.errors.required\">Name is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty=\"ngModel\" name=\"value\" [(ngModel)]=\"createProvidedProperty.value\" #valueProperty type=\"text\" class=\"form-control\" id=\"valueProperty\" value=\"{{createProvidedProperty.value}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"valueProperty.errors && (valueProperty.dirty || valueProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!valueProperty.errors.required\">Value is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addProvidedProperty()\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Modal for Create ExpectedProperty -->\n<div class=\"modal fade modal-position\" id=\"createExpectedProperty\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Create ExpectedProperty</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty=\"ngModel\" name=\"name\" [(ngModel)]=\"createExpectedProperty.name\" #nameProperty type=\"text\" class=\"form-control\" id=\"nameProperty\" value=\"{{createExpectedProperty.name}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"nameProperty.errors && (nameProperty.dirty || nameProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!nameProperty.errors.required\">Name is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty=\"ngModel\" name=\"value\" [(ngModel)]=\"createExpectedProperty.value\" #valueProperty type=\"text\" class=\"form-control\" id=\"valueProperty\" value=\"{{createExpectedProperty.value}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"valueProperty.errors && (valueProperty.dirty || valueProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!valueProperty.errors.required\">Value is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addExpectedProperty()\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Modal for Refinement -->\n<div class=\"modal fade modal-position\" id=\"refinementModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Refinement</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<div class=\"col-sm-12 form-group\">\n\t\t\t\t\t<label>Select Level Graphs which should be used for the Refinement:</label>\n\t\t\t\t\t<div id=\"refineGraphList\" class=\"w3-light-grey\" style=\"max-height: 300px; overflow: auto\">\n\t\t\t\t\t\t<label *ngFor=\"let levelGraph of levelGraphs\" class=\"form-control\"> <input type=\"checkbox\" name=\"levelGraphs\" [(ngModel)]=\"levelGraph.checked\" value=\"{{levelGraph.id}}\" (click)=\"onCheckLevelGraph(levelGraph)\" /> Name: {{levelGraph.name}} ID: {{levelGraph.id}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<form>\n\n\t\t\t\t\t<div class=\"col-sm-12 form-group\">\n\t\t\t\t\t\t<label for=\"smi\">Satisfaction Index (between 0 and 1): </label> <input #smi type=\"number\" min=\"0\" max=\"1\" class=\"form-control\" value=\"1\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"setUsedLevelGraphs()\">Restore</button>\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"startRefinement(smi.value, steps)\" data-dismiss=\"modal\">Refinement</button>\n -->\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"startRefinement(smi.value, 1)\" data-dismiss=\"modal\">One Step Refinement</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Modal for Edit TopologyNodeName-->\n<div class=\"modal fade modal-position\" id=\"editNodeTemplateName\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit NodeTemplate Name</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name: </label> <input #editNameNodeTmeplate type=\"text\" class=\"form-control\" value=\"{{currentNodeTemplate.name}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"editNodeTemplateName(editNameNodeTmeplate.value)\" data-dismiss=\"modal\">Save</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n<!-- Modal for Edit TopologyRelationName-->\n<div class=\"modal fade modal-position\" id=\"editRelationshipTemplateName\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit RelationshipTemplate Name</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name: </label> <input #editNameRelationshipTmeplate type=\"text\" class=\"form-control\" id=\"name\" value=\"{{currentRelationshipTemplate.name}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"editRelationshipTemplateName(editNameRelationshipTmeplate.value)\" data-dismiss=\"modal\">Save</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard_area\">\n\t\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 w3-card-4 heading\">\n\t\t<h2>Topology Template Tool</h2>\n\t</div>\n\n\t<div class=\"rounded w3-theme-d2\" style=\"margin:30px\">\n\t\t\n\t\t<!-- Selector for the TopologyTemplateComponent -->\n\t\t<app-topologytemplate [topologyTemplates]=\"topologyTemplates\"></app-topologytemplate>\n\t\n\t</div>\n</div>\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphDetailsComponent Area -->\n<div class=\"dashboard_area\">\n\t\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tLevel Graph Name: <input disabled style=\"color: black\" value=\"{{currentLevelGraph.name}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tLevel Graph ID: <input disabled style=\"color: black\" value=\"{{currentLevelGraph.id}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Tab Panel for display data -->\n\t<div class=\"data-panel \">\n\t\t\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#levelGraphNode\" style=\"color: white\" role=\"tab\">Level Graph Node</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#levelGraphRelation\" style=\"color: white\" role=\"tab\">Level Graph Relation</a></li>\n\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\t\t\t\n\t\t\t<div id=\"levelGraphNode\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!--  Selector for the NodeTypeComponent -->\n\t\t\t\t<app-levelgraphnode [currentLevelGraph]=\"currentLevelGraph\"></app-levelgraphnode>\n\t\t\t</div>\n\t\t\t\n\t\t    <div id=\"levelGraphRelation\" class=\"rounded tab-pane \" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RelationshipTypeComponent -->\n\t\t\t\t<app-levelgraphrelation [currentLevelGraphRelations]=\"currentLevelGraph.levelGraphRelations\"></app-levelgraphrelation>\n\t\t\t</div>\n\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphComponent Area -->\n<div id=\"accordion\" class=\"panel-group tab-panel collapsed_area\">\n\n\t<div class=\"panel panel-default \">\n\n\t\t<!-- Header -->\n\t\t<div class=\"row panel-heading control-panel\">\n\t\t\t<h3 class=\"col-sm-6\">Level-Graphs</h3>\n\t\t\t\n\t\t\t<!-- New Button -->\n\t\t\t<button class=\"w3-right w3-green btn btn-primary\" id=\"createLevelGraph\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#createLevelGraphFieldsArea\">\n\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New\n\t\t\t</button>\n\t\t\t\n\t\t\t<!-- Import Button-->\n\t\t\t<button class=\"w3-right w3-theme-l1 btn btn-primary\" id=\"import\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#importAreaLevelGraph\">\n\t\t\t\t<i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Import\n\t\t\t</button>\n\t\t\t\n\t\t</div>\n\n\t\t<!-- Input Panel -->\n\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"createLevelGraphFieldsArea\">\n\t\t\t<form #createLevelGraphForm=\"ngForm\">\n\t\t\t\t<div class=\"col-sm-8 form-group\">\n\t\t\t\t\t<label for=\"levelGraphName\">Name:</label> <input #levelGraphName #levelGraphName=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\" id=\"levelGraphName\" [(ngModel)]=\"createdLevelGraph.name\" value=\"{{createdLevelGraph.name}}\" required>\n\t\t\t\t\t<div *ngIf=\"levelGraphName.errors && (levelGraphName.dirty || levelGraphName.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t<div [hidden]=\"!levelGraphName.errors.required\">Name is required</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t<label for=\"numberOfLevels\">Number of Levels:</label>\n\t\t\t\t\t<div>\n\n\t\t\t\t\t\t<button (click)=\"removeLevel()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t<input #numberOfLevels readonly style=\"width: 100px\" id=\"number_of_levels\" type=\"number\" class=\"w3-center \" value=\"{{levels}}\" min=\"2\">\n\t\t\t\t\t\t<button (click)=\"addLevel()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" [disabled]=\"!createLevelGraphForm.form.valid\" class=\"btn btn-success\" (click)=\"createLevelGraph(numberOfLevels.value)\">Create</button>\n\t\t\t</form>\n\t\t</div>\n\t\t\n\t\t<!-- Import Panel -->\n\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"importAreaLevelGraph\">\n\t\t\t<form>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"file\">XML-File: </label> <input class=\"form-control\" #file type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"importLevelGraph()\">Upload</button>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n\n\t<!-- Data Table -->\n\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\n\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\n\t\t\t<thead>\n\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th>Nr.</th>\n\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t<th>ID</th>\n\t\t\t\t\t<th>Modeller</th>\n\t\t\t\t\t<th>Edit</th>\n\t\t\t\t\t<th>Export</th>\n\t\t\t\t\t<th>Delete</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let levelGraph of levelGraphs\">\n\t\t\t\t\t<td routerLink=\"/dashboard/levelgraph\" [queryParams]=\"{name: levelGraph.name, id: levelGraph.id}\"><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\n\t\t\t\t\t<td routerLink=\"/dashboard/levelgraph\" [queryParams]=\"{name: levelGraph.name, id: levelGraph.id}\">{{ levelGraphs.indexOf(levelGraph) +1 }}</td>\n\t\t\t\t\t<td routerLink=\"/dashboard/levelgraph\" [queryParams]=\"{name: levelGraph.name, id: levelGraph.id}\">{{ levelGraph.name }}</td>\n\t\t\t\t\t<td routerLink=\"/dashboard/levelgraph\" [queryParams]=\"{name: levelGraph.name, id: levelGraph.id}\">{{ levelGraph.id }}</td>\n\t\t\t\t\t<td><button class=\"w3-blue btn\" type=\"button\" routerLink=\"/dashboard/levelgraphmodeller\" [queryParams]=\"{name: levelGraph.name, id: levelGraph.id}\">Modeller</button></td>\n\t\t\t\t\t<td><button class=\"w3-blue btn\" type=\"button\" data-toggle=\"modal\" data-target=\"#editLevelGraphModal\" (click)=\"setEditedLevelGraph(levelGraph)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button></td>\n\t\t\t\t\t<td><button class=\"btn\" type=\"button\" (click)=\"exportLevelGraph(levelGraph)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button></td>\n\t\t\t\t\t<td><button class=\"w3-red btn\" (click)=\"deleteLevelGraph(levelGraph.id, $event)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\t<div class=\"bottom_collapse_area\"></div>\n\n</div>\n\n<!-- Modal for Edit Level Graph-->\n<div class=\"modal fade modal-position\" id=\"editLevelGraphModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit LevelGraph</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name: </label> <input #editName type=\"text\" class=\"form-control\" id=\"name\" value=\"{{editedLevelGraph.name}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"updateLevelGraph( editName.value)\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphNode Component -->\n<div class=\"tab-panel rounded\">\n\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area \">\n\t\t\n\t\t<!-- Header -->\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"row panel-heading control-panel\">\n\t\t\t\t<h3 class=\"col-sm-3\">Level Graph Node</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- DataTable -->\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t\t<th class=\"table-head\"></th>\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t\t<th class=\"table-head\">Name</th>\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t\t<th class=\"table-head\">NodeType</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr routerLink=\"/dashboard/levelgraphnodedetails\" [queryParams]=\"{name: levelGraphNode.name , id: levelGraphNode.id}\" *ngFor=\"let levelGraphNode of currentLevelGraph.levelGraphNodes\">\n\t\t\t\t\t\t<td><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\n\t\t\t\t\t\t<td>{{ currentLevelGraph.levelGraphNodes.indexOf(levelGraphNode) + 1 }}</td>\n\t\t\t\t\t\t<td>{{ levelGraphNode.name }}</td>\n\t\t\t\t\t\t<td>{{ levelGraphNode.id }}</td>\n\t\t\t\t\t\t<td>{{ levelGraphNode.levelGraphNodeType }}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "l<!-- General Data Component currently only for display data but you can extends later this component with update functionality -->\n<div class=\"tab-panel rounded\">\n\n\t<div class=\"w3-theme-l1 input-panel\" id=\"createNodeTypeFieldsArea\">\n\t\t<form>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>ID: </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.id}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label for=\"nameLevelGraphNode\">Name: </label> <input disabled #nameLevelGraphNode type=\"text\" class=\"form-control\" value=\"{{currentLevelGraphNode.name}}\" required>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t<label for=\"icon\">Icon Path: </label> <input class=\"  form-control\" #icon value=\"{{currentLevelGraphNode.icon}}\" disabled />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label>Icon View: </label> <img class=\" form-control w3-right icon\" src=\"{{currentLevelGraphNode.icon}}\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>X (in px): </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.x}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Y (in px): </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.y}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Width (in px): </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.width}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Height (in px): </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.height}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Level Depth: </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.levelDepth}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Type: </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.levelGraphNodeType}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Node Type ID: </label>\n\t\t\t\t\t<input class=\"form-control col-sm-5\" value=\"{{currentLevelGraphNode.levelGraphNodeTypeId}}\" disabled>\n\t\t\t\t\t<button *ngIf=\"currentLevelGraphNode.levelGraphNodeType === 'NODETYPE'\" class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/nodetypedetails\" [queryParams]=\"{id: currentLevelGraphNode.levelGraphNodeTypeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button *ngIf=\"currentLevelGraphNode.levelGraphNodeType === 'RELATIONSHIPTYPE'\" class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/relationshipdetails\" [queryParams]=\"{id: currentLevelGraphNode.levelGraphNodeTypeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Level ID: </label> <input class=\"form-control\" value=\"{{currentLevelGraphNode.levelId}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Level Graph ID: </label>\n\t\t\t\t\t<input class=\"form-control col-sm-5\" value=\"{{currentLevelGraphNode.levelGraphId}}\" disabled><button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/levelgraphmodeller\" [queryParams]=\"{id: currentLevelGraphNode.levelGraphId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphNodeDetails Area -->\n<div class=\"dashboard_area\">\n\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tLevel Graph Node Name: <input disabled style=\"color: black\" value=\"{{currentLevelGraphNode.name}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tLevel Graph Node ID: <input disabled style=\"color: black\" value=\"{{currentLevelGraphNode.id}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\n\t<!-- Tab Panel for display data -->\n\t<div class=\"data-panel \">\n\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#generalData\" style=\"color: white\" role=\"tab\">General Data</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#providedProperty\" style=\"color: white\" role=\"tab\">Provided Property</a></li>\n<!-- \t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#expectedproperty\" style=\"color: white\" role=\"tab\">Expected Property</a></li>\n -->\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#outRelation\" style=\"color: white\" role=\"tab\">Outgoing Relation</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#inRelation\" style=\"color: white\" role=\"tab\">Incoming Relation</a></li>\n\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\n\t\t\t<div id=\"generalData\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the NodeTypeComponent -->\n\t\t\t\t<app-generaldata [currentLevelGraphNode]=\"currentLevelGraphNode\"></app-generaldata>\n\t\t\t</div>\n\n\t\t\t<div id=\"providedProperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the ProvidedPropertyComponent -->\n\t\t\t\t<app-providedproperty [entity]=\"currentLevelGraphNode\"></app-providedproperty>\n\t\t\t</div>\n\n\t\t<!-- \t<div id=\"expectedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\tSelector for the ExpectedPropertyComponent\n\t\t\t\t<app-expectedproperty [entity]=\"currentLevelGraphNode\"></app-expectedproperty>\n\t\t\t</div> -->\n\n\t\t\t<div id=\"outRelation\" class=\"rounded tab-pane \" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RelationshipTypeComponent -->\n\t\t\t\t<app-levelgraphrelation [currentLevelGraphRelations]=\"currentLevelGraphNode.outLevelGraphRelations\"></app-levelgraphrelation>\n\t\t\t</div>\n\n\t\t\t<div id=\"inRelation\" class=\"rounded tab-pane \" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RelationshipTypeComponent -->\n\t\t\t\t<app-levelgraphrelation [currentLevelGraphRelations]=\"currentLevelGraphNode.inLevelGraphRelations\"></app-levelgraphrelation>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphRelationComponent Area -->\n<div class=\"tab-panel rounded\">\n\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area \">\n\n\t\t<!-- Header -->\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"row panel-heading control-panel\">\n\t\t\t\t<h3 class=\"col-sm-3\">Level Graph Relations</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- Data Table -->\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t\t<th class=\"table-head\"></th>\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t\t<th class=\"table-head\">RelationType</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr  routerLink=\"/dashboard/levelgraphrelationdetails\" [queryParams]=\"{id: levelGraphRelation.id}\" *ngFor=\"let levelGraphRelation of currentLevelGraphRelations\">\n\t\t\t\t\t\t<td><i class=\"fa fa-folder-open-o\"></i></td>\n\t\t\t\t\t\t<td>{{ currentLevelGraphRelations.indexOf(levelGraphRelation) + 1 }}</td>\n\t\t\t\t\t\t<td>{{ levelGraphRelation.id }}</td>\n\t\t\t\t\t\t<td>{{ levelGraphRelation.levelGraphRelationType }}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "<!-- General Data Component -->\n<div class=\"tab-panel rounded\">\n\n\t<div class=\"w3-theme-l1 input-panel\">\n\t\t<form>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>ID: </label> <input class=\"form-control\" value=\"{{currentLevelGraphRelation.id}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label for=\"nameLevelGraphNode\">Name: </label> <input disabled #nameLevelGraphNode type=\"text\" class=\"form-control\" value=\"{{currentLevelGraphRelation.name}}\" required>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t<label for=\"icon\">Icon Path: </label> <input class=\"  form-control\" #icon value=\"{{currentLevelGraphRelation.icon}}\" disabled />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label>Icon View: </label> <img class=\" form-control w3-right icon\" src=\"{{currentLevelGraphRelation.icon}}\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Source Node Level Depth: </label> <input class=\"form-control\" value=\"{{currentLevelGraphRelation.sourceLevelDepth}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Target Node Level Depth: </label> <input class=\"form-control\" value=\"{{currentLevelGraphRelation.targetLevelDepth}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Source Node ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentLevelGraphRelation.sourceNodeId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/levelgraphnodedetails\" [queryParams]=\"{id: currentLevelGraphRelation.sourceNodeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Target Node ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentLevelGraphRelation.targetNodeId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/levelgraphnodedetails\" [queryParams]=\"{id: currentLevelGraphRelation.targetNodeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Type:</label> <input class=\"form-control col-sm-5\" value=\"{{currentLevelGraphRelation.levelGraphRelationType}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Source Level ID: </label> <input class=\"form-control\" value=\"{{currentLevelGraphRelation.sourceLevelId}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Target Level ID: </label> <input class=\"form-control\" value=\"{{currentLevelGraphRelation.targetLevelId}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Level Graph ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentLevelGraphRelation.levelGraphId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/levelgraphmodeller\" [queryParams]=\"{id: currentLevelGraphRelation.levelGraphId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphRelationDetails Area -->\n<div class=\"dashboard_area\">\n\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tLevel Graph Relation Name: <input disabled style=\"color: black\" value=\"{{currentLevelGraphRelation.name}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tLevel Graph Relation ID: <input disabled style=\"color: black\" value=\"{{currentLevelGraphRelation.id}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\n\t<!-- Tab Panel for display data -->\n\t<div class=\"data-panel \">\n\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#generalData\" style=\"color: white\" role=\"tab\">General Data</a></li>\n<!-- \t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#providedProperty\" style=\"color: white\" role=\"tab\">Provided Property</a></li>\n --><!-- \t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#expectedproperty\" style=\"color: white\" role=\"tab\">Expected Property</a></li>\n -->\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\n\t\t\t<div id=\"generalData\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the NodeTypeComponent -->\n\t\t\t\t<app-generaldata [currentLevelGraphRelation]=\"currentLevelGraphRelation\"></app-generaldata>\n\t\t\t</div>\n\n\t\t<!-- \t<div id=\"providedProperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\tSelector for the ProvidedPropertyComponent\n\t\t\t\t<app-providedproperty [entity]=\"currentLevelGraphRelation\"></app-providedproperty>\n\t\t\t</div> -->\n\n\t\t<!-- \t<div id=\"expectedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\tSelector for the ExpectedPropertyComponent\n\t\t\t\t<app-expectedproperty [entity]=\"currentLevelGraphRelation\"></app-expectedproperty>\n\t\t\t</div> -->\n\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "<!-- Expected Property Area -->\n<div class=\"tab-panel rounded\">\n\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area \">\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t\n\t\t\t<!-- Header -->\n\t\t\t<div class=\"row panel-heading control-panel\">\n\n\t\t\t\t<h3 class=\"col-sm-6\">Expected Properties</h3>\n\n\t\t\t\t<button class=\"w3-right w3-green btn\" id=\"createProperty\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\"\n\t\t\t\t\thref=\"#createExpectedPropertyArea\">\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>New\n\t\t\t\t</button>\n\n\t\t\t</div>\n\n\t\t\t<!-- Input Panel -->\n\t\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"createExpectedPropertyArea\">\n\t\t\t\t<form #createNodeTypeForm=\"ngForm\">\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty=\"ngModel\" name=\"name\" [(ngModel)]=\"createdExpectedProperty.name\" #nameProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"nameProperty\" value=\"{{createdExpectedProperty.name}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"nameProperty.errors && (nameProperty.dirty || nameProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!nameProperty.errors.required\">Name is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty=\"ngModel\" name=\"value\" [(ngModel)]=\"createdExpectedProperty.value\" #valueProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"valueProperty\" value=\"{{createdExpectedProperty.value}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"valueProperty.errors && (valueProperty.dirty || valueProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!valueProperty.errors.required\">Value is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!createNodeTypeForm.form.valid\" (click)=\"createExpectedProperty()\">Create</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<!-- Data Table -->\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t\t<th class=\"table-head\">Name</th>\n\t\t\t\t\t\t<th class=\"table-head\">Value</th>\n\t\t\t\t\t\t<th class=\"table-head\">Edit</th>\n\t\t\t\t\t\t<th class=\"table-head\">Delete</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let property of entity.expectedProperties\">\n\t\t\t\t\t\t<td>{{entity.expectedProperties.indexOf(property) + 1 }}</td>\n\t\t\t\t\t    <td>{{ property.id }}</td>\n\t\t\t\t\t\t<td>{{ property.name }}</td>\n\t\t\t\t\t\t<td>{{ property.value }}</td>\n\t\t\t\t\t\t<td><button type=\"button\" data-toggle=\"modal\" data-target=\"#editExpectedPropertyModal\" class=\"w3-blue btn\" (click)=\"setExpectedProperty(property)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t<td><button class=\"w3-red btn\" (click)=\"deleteExpectedProperty(property.id)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Modal for Edit Expected Property-->\n<div class=\"modal fade modal-position\" id=editExpectedPropertyModal tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Expected Property</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"nameProperty\" value=\"{{editExpectedProperty.name}}\" required>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"valueProperty\" value=\"{{editExpectedProperty.value}}\" required>\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"updateExpectedProperty(nameProperty.value, valueProperty.value)\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "<!-- ProvidedProperty Area -->\n<div class=\"tab-panel rounded\">\n\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area \">\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t\n\t\t\t<!-- Header -->\n\t\t\t<div class=\"row panel-heading control-panel\">\n\n\t\t\t\t<h3 class=\"col-sm-6\">Provided Properties</h3>\n\n\t\t\t\t<button class=\"w3-right w3-green btn\" id=\"createProperty\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\"\n\t\t\t\t\thref=\"#createPropertyArea\">\n\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New\n\t\t\t\t</button>\n\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- Input Panel -->\n\t\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"createPropertyArea\">\n\t\t\t\t<form #createNodeTypeForm=\"ngForm\">\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty=\"ngModel\" name=\"name\" [(ngModel)]=\"createdProvidedProperty.name\" #nameProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"nameProperty\" value=\"{{createdProvidedProperty.name}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"nameProperty.errors && (nameProperty.dirty || nameProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!nameProperty.errors.required\">Name is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty=\"ngModel\" name=\"value\" [(ngModel)]=\"createdProvidedProperty.value\" #valueProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"valueProperty\" value=\"{{createdProvidedProperty.value}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"valueProperty.errors && (valueProperty.dirty || valueProperty.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!valueProperty.errors.required\">Value is required</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!createNodeTypeForm.form.valid\" (click)=\"createProvidedProperty()\">Create</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<!-- Data Table -->\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t\t<th class=\"table-head\">Name</th>\n\t\t\t\t\t\t<th class=\"table-head\">Value</th>\n\t\t\t\t\t\t<th class=\"table-head\">Edit</th>\n\t\t\t\t\t\t<th class=\"table-head\">Delete</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let property of entity.providedProperties\">\n\t\t\t\t\t\t<td>{{ entity.providedProperties.indexOf(property) + 1 }}</td>\n\t\t\t\t\t    <td>{{ property.id }}</td>\n\t\t\t\t\t\t<td>{{ property.name }}</td>\n\t\t\t\t\t\t<td>{{ property.value }}</td>\n\t\t\t\t\t\t<td><button type=\"button\" data-toggle=\"modal\" data-target=\"#editPropertyModal\" class=\"w3-blue btn\" (click)=\"setProvidedProperty(property)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t<td><button class=\"w3-red btn\" (click)=\"deleteProvidedProperty(property.id)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Modal for Edit Provided Property-->\n<div class=\"modal fade modal-position\" id=editPropertyModal tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Provided Property</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"nameProperty\">Name: </label> <input #nameProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"nameProperty\" value=\"{{editProvidedProperty.name}}\" required>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\n\t\t\t\t\t\t<label for=\"valueProperty\">Value: </label> <input #valueProperty type=\"text\"\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"valueProperty\" value=\"{{editProvidedProperty.value}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"updateProvidedProperty(nameProperty.value, valueProperty.value)\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<!-- NodeTemplate Component -->\n<div class=\"tab-panel rounded\">\n\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area \">\n\t\t\n\t\t<!-- Header -->\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"row panel-heading control-panel\">\n\t\t\t\t<h3 class=\"col-sm-3\">Node Template</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- DataTable -->\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t\t<th class=\"table-head\"></th>\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t\t<th class=\"table-head\">Name</th>\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr routerLink=\"/dashboard/nodetemplatedetails\" [queryParams]=\"{id: nodeTemplate.id}\" *ngFor=\"let nodeTemplate of currentTopologyTemplate.nodeTemplates\">\n\t\t\t\t\t\t<td><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\n\t\t\t\t\t\t<td>{{ currentTopologyTemplate.nodeTemplates.indexOf(nodeTemplate) + 1 }}</td>\n\t\t\t\t\t\t<td>{{ nodeTemplate.name }}</td>\n\t\t\t\t\t\t<td>{{ nodeTemplate.id }}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<!-- General Data Component currently only for display data but you can extends later this component with update functionality -->\n<div class=\"tab-panel rounded\">\n\n\t<div class=\"w3-theme-l1 input-panel\" id=\"createNodeTypeFieldsArea\">\n\t\t<form #formCtrl=\"ngForm\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>ID: </label> <input class=\"form-control\" value=\"{{currentNodeTemplate.id}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label for=\"nameLevelGraphNode\">Name: </label> <input disabled #nameLevelGraphNode type=\"text\" class=\"form-control\" value=\"{{currentNodeTemplate.name}}\" required>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t<label for=\"icon\">Icon Path: </label> <input class=\"  form-control\" #icon value=\"{{currentNodeTemplate.icon}}\" disabled />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label>Icon View: </label> <img class=\" form-control w3-right icon\" src=\"{{currentNodeTemplate.icon}}\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>X (in px): </label> <input class=\"form-control\" value=\"{{currentNodeTemplate.x}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Y (in px): </label> <input class=\"form-control\" value=\"{{currentNodeTemplate.y}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Width (in px): </label> <input class=\"form-control\" value=\"{{currentNodeTemplate.width}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Height (in px): </label> <input class=\"form-control\" value=\"{{currentNodeTemplate.height}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Node Type ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentNodeTemplate.nodeTypeId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/nodetypedetails\" [queryParams]=\"{id: currentNodeTemplate.nodeTypeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Level Graph Node ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentNodeTemplate.levelGraphNodeId}}\" required disabled>\n\t\t\t\t\t<button [disabled]=\"currentNodeTemplate.levelGraphNodeId !== undefined\" class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/levelgraphnodedetails\" [queryParams]=\"{id: currentNodeTemplate.levelGraphNodeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Topology Template ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentNodeTemplate.topologyTemplateId}}\" disabled>\n\t\t\t\t\t<button *ngIf=\"currentNodeTemplate.topologyTemplateId !== null\" class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/topologymodeller\" [queryParams]=\"{id: currentNodeTemplate.topologyTemplateId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphNodeDetails Area -->\n<div class=\"dashboard_area\">\n\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tNode Template: <input disabled style=\"color: black\" value=\"{{currentNodeTemplate.name}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tNode Template: <input disabled style=\"color: black\" value=\"{{currentNodeTemplate.id}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\n\t<!-- Tab Panel for display data -->\n\t<div class=\"data-panel \">\n\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#generalData\" style=\"color: white\" role=\"tab\">General Data</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#providedProperty\" style=\"color: white\" role=\"tab\">Provided Property</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#expectedproperty\" style=\"color: white\" role=\"tab\">Expected Property</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#outRelation\" style=\"color: white\" role=\"tab\">Outgoing Relation</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#inRelation\" style=\"color: white\" role=\"tab\">Incoming Relation</a></li>\n\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\n\t\t\t<div id=\"generalData\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the NodeTypeComponent -->\n\t\t\t\t<app-generaldata [currentNodeTemplate]=\"currentNodeTemplate\"></app-generaldata>\n\t\t\t</div>\n\n\t\t\t<div id=\"providedProperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the ProvidedPropertyComponent -->\n\t\t\t\t<app-providedproperty [entity]=\"currentNodeTemplate\"></app-providedproperty>\n\t\t\t</div>\n\n\t\t\t<div id=\"expectedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the ExpectedPropertyComponent -->\n\t\t\t\t<app-expectedproperty [entity]=\"currentNodeTemplate\"></app-expectedproperty>\n\t\t\t</div>\n\n\t\t\t<div id=\"outRelation\" class=\"rounded tab-pane \" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RelationshipTypeComponent -->\n\t\t\t\t<app-relationshiptemplate [currentRelationshipTemplates]=\"currentNodeTemplate.outRelationshipTemplates\"></app-relationshiptemplate>\n\t\t\t</div>\n\n\t\t\t<div id=\"inRelation\" class=\"rounded tab-pane \" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RelationshipTypeComponent -->\n\t\t\t\t<app-relationshiptemplate [currentRelationshipTemplates]=\"currentNodeTemplate.inRelationshipTemplates\"></app-relationshiptemplate>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<!-- RelationshipTemplate Component -->\n<div class=\"tab-panel rounded\">\n\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area \">\n\t\t\n\t\t<!-- Header -->\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"row panel-heading control-panel\">\n\t\t\t\t<h3 class=\"col-sm-3\">Relationship Template</h3>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!-- DataTable -->\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t\t<th class=\"table-head\"></th>\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t\t<th class=\"table-head\">Name</th>\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr routerLink=\"/dashboard/relationshiptemplatedetails\" [queryParams]=\"{id: relationshipTemplate.id}\" *ngFor=\"let relationshipTemplate of currentRelationshipTemplates\">\n\t\t\t\t\t\t<td><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\n\t\t\t\t\t\t<td>{{ currentRelationshipTemplates.indexOf(relationshipTemplate) + 1 }}</td>\n\t\t\t\t\t\t<td>{{ relationshipTemplate.name }}</td>\n\t\t\t\t\t\t<td>{{ relationshipTemplate.id }}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<!-- General Data Component currently only for display data but you can extends later this component with update functionality -->\n<div class=\"tab-panel rounded\">\n\n\t<div class=\"w3-theme-l1 input-panel\" id=\"createNodeTypeFieldsArea\">\n\t\t<form>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>ID: </label> <input class=\"form-control\" value=\"{{currentRelationshipTemplate.id}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label for=\"nameLevelGraphNode\">Name: </label> <input disabled #nameLevelGraphNode type=\"text\" class=\"form-control\" value=\"{{currentRelationshipTemplate.name}}\" required>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t<label for=\"icon\">Icon Path: </label> <input class=\"  form-control\" #icon value=\"{{currentRelationshipTemplate.icon}}\" disabled />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label>Icon View: </label> <img class=\" form-control w3-right icon\" src=\"{{currentRelationshipTemplate.icon}}\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Source Node ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentRelationshipTemplate.sourceNodeId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/nodetemplatedetails\" [queryParams]=\"{id: currentRelationshipTemplate.sourceNodeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Target Node ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentRelationshipTemplate.targetNodeId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/nodetemplatedetails\" [queryParams]=\"{id: currentRelationshipTemplate.targetNodeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Relationship Type ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentRelationshipTemplate.relationshipTypeId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/relationshiptypedetails\" [queryParams]=\"{id: currentRelationshipTemplate.relationshipTypeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Level Graph Node ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentRelationshipTemplate.levelGraphNodeId}}\" disabled>\n\t\t\t\t\t<button [disabled]=\"currentRelationshipTemplate.levelGraphNodeId !== undefined\" class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/relationshiptypedetails\" [queryParams]=\"{id: currentRelationshipTemplate.levelGraphNodeId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Topology Template ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentRelationshipTemplate.topologyTemplateId}}\" disabled>\n\t\t\t\t\t<button *ngIf=\"currentRelationshipTemplate.topologyTemplateId !== null\" class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/topologymodeller\" [queryParams]=\"{id: currentRelationshipTemplate.topologyTemplateId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<!-- RelationshipTemplate Area -->\n<div class=\"dashboard_area\">\n\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tRelationship Template Name: <input disabled style=\"color: black\" value=\"{{currentRelationshipTemplate.name}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tRelationship Template ID: <input disabled style=\"color: black\" value=\"{{currentRelationshipTemplate.id}}\" />\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\n\t<!-- Tab Panel for display data -->\n\t<div class=\"data-panel \">\n\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#generalData\" style=\"color: white\" role=\"tab\">General Data</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#providedProperty\" style=\"color: white\" role=\"tab\">Provided Property</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#expectedproperty\" style=\"color: white\" role=\"tab\">Expected Property</a></li>\n\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\n\t\t\t<div id=\"generalData\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the NodeTypeComponent -->\n\t\t\t\t<app-generaldata [currentRelationshipTemplate]=\"currentRelationshipTemplate\"></app-generaldata>\n\t\t\t</div>\n\n\t\t\t<div id=\"providedProperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the ProvidedPropertyComponent -->\n\t\t\t\t<app-providedproperty [entity]=\"currentRelationshipTemplate\"></app-providedproperty>\n\t\t\t</div>\n\n\t\t\t<div id=\"expectedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the ExpectedPropertyComponent -->\n\t\t\t\t<app-expectedproperty [entity]=\"currentRelationshipTemplate\"></app-expectedproperty>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<!-- RepositoryComponent Area -->\r\n<div id=\"accordion\" class=\"panel-group collapsed_area tab-panel\">\r\n\r\n\t<div class=\"panel panel-default \">\r\n\r\n\t\t<!-- Header -->\r\n\t\t<div class=\"row panel-heading control-panel\">\r\n\t\t\t<h3 class=\"col-sm-3\">Repositories</h3>\r\n\t\t\t\r\n\t\t\t<!-- New Button -->\r\n\t\t\t<button class=\"w3-right w3-green btn btn-primary\" id=\"addRepository\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#addRepositoriesFieldsArea\">\r\n\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New\r\n\t\t\t</button>\r\n\r\n\t\t\t<!-- Import Button-->\r\n\t\t\t<button class=\"w3-right w3-theme-l1 btn btn-primary\" id=\"import\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#importAreaRepository\">\r\n\t\t\t\t<i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Import\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<!-- Data panel -->\r\n\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"addRepositoriesFieldsArea\">\r\n\t\t\t<form #createRepositoryForm=\"ngForm\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"repositoryName\">Name: </label> <input #repositoryName #repositoryName=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\" id=\"repositoryName\" [(ngModel)]=\"createdRepository.name\" type=\"text\" class=\"form-control\" value=\"{{createdRepository.name}}\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"repositoryName.errors && (repositoryName.dirty || repositoryName.touched)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t<div [hidden]=\"!repositoryName.errors.required\">Name is required</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<button type=\"submit\" [disabled]=\"!createRepositoryForm.form.valid\" class=\"btn btn-success\" (click)=\"createRepository()\">Save</button>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<!-- Import Panel -->\r\n\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"importAreaRepository\">\r\n\t\t\t<form>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"file\">XML-File: </label> <input class=\"form-control\" #file type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"importRepository()\">Upload</button>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<!-- Data table -->\r\n\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\r\n\r\n\t\t<table class=\"w3-table-all table-striped w3-bordered\">\r\n\r\n\t\t\t<thead>\r\n\t\t\t\t<tr class=\"w3-theme-d3\">\r\n\t\t\t\t\t<th class=\"table-head\"></th>\r\n\t\t\t\t\t<th class=\"table-head\">Nr.</th>\r\n\t\t\t\t\t<th class=\"table-head\">Name</th>\r\n\t\t\t\t\t<th class=\"table-head\">ID</th>\r\n\t\t\t\t\t<th class=\"table-head\">Edit</th>\r\n\t\t\t\t\t<th class=\"table-head\">Export</th>\r\n\t\t\t\t\t<th class=\"table-head\">Delete</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr class=\"height\" *ngFor=\"let repository of repositories\">\r\n\t\t\t\t\t<td routerLink=\"/dashboard/repository\" [queryParams]=\"{id: repository.id}\"><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\r\n\t\t\t\t\t<td routerLink=\"/dashboard/repository\" [queryParams]=\"{id: repository.id}\">{{ repositories.indexOf(repository) +1 }}</td>\r\n\t\t\t\t\t<td routerLink=\"/dashboard/repository\" [queryParams]=\"{id: repository.id}\">{{ repository.name }}</td>\r\n\t\t\t\t\t<td routerLink=\"/dashboard/repository\" [queryParams]=\"{id: repository.id}\">{{ repository.id }}</td>\r\n\t\t\t\t\t<td><button type=\"button\" data-toggle=\"modal\" data-target=\"#editRepositoryModal\" class=\"w3-blue btn\" (click)=setEditRepositoryData(repository)>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t</button></td>\r\n\t\t\t\t\t<td><button class=\"btn\" type=\"button\" (click)=\"exportRepository(repository)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t</button></td>\r\n\t\t\t\t\t<td><button class=\"w3-red btn\" (click)=\"deleteRepository(repository.id, $event)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t</button></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Modal for Edit Repository-->\r\n<div class=\"modal fade modal-position\" id=\"editRepositoryModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t<div class=\" w3-theme-l1 modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Repository</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"  input-panel\">\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"name\">Name: </label> <input #editName type=\"text\" class=\"form-control\" id=\"name\" value=\"{{editedRepository.name}}\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"updateRepository(editName.value)\" data-dismiss=\"modal\">Save</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<!-- RepositoryDetailsComponent Area -->\n<div class=\"dashboard_area\">\n\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tRepository Name: <input disabled style=\"color: black\" value=\"{{currentRepository.name}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tRepository ID: <input disabled style=\"color: black\" value=\"{{currentRepository.id}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\n\t<!-- Tab Panel -->\n\t<div class=\"data-panel \">\n\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#nodeType\" style=\"color: white\" role=\"tab\">Node Type</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#relationshipType\" style=\"color: white\" role=\"tab\">Relationship Type</a></li>\n\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\n\t\t\t<div id=\"nodeType\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the NodeTypeComponent -->\n\t\t\t\t<app-nodetype [repository]=\"currentRepository\" [nodeTypes]=\"currentRepository.nodeTypes\"></app-nodetype>\n\t\t\t</div>\n\n\t\t\t<div id=\"relationshipType\" class=\"rounded tab-pane \" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RelationshipTypeComponent -->\n\t\t\t\t<app-relationshiptype [repository]=\"currentRepository\" [relationshipTypes]=\"currentRepository.relationshipTypes\"></app-relationshiptype>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<nav class=\"w3-theme-d4 navbar navbar-dark bg-inverse navbar-fixed-top topnav\">\n\t<div class=\"collapse navbar-toggleable-xs clearfix text-center\">\n\t\t<a class=\"navbar-brand navbar-item\" routerLink=\"/dashboard/administration\" [routerLinkActive]=\"['router-link-active']\">ArchRef</a> \n\t\t<a class=\"navbar-item\" routerLink=\"/dashboard/topologytemplatetool\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-fw fa-dashboard\"></i> Topology-Tool</a>\n\t\t<a class=\"navbar-item\" routerLink=\"/dashboard/levelgraphtool\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-fw fa-dashboard\"></i>Level-Graph-Tool</a>\n\t\t<a class=\"navbar-item\"  routerLink=\"/dashboard/administration\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-fw fa-dashboard\"></i>Administration Tool</a>\n\t</div>\n</nav>"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<!-- TopologyTemplateComponent Area -->\n<div id=\"accordion\" class=\"panel-group collapsed_area tab-panel\">\n\n\t<div class=\"panel panel-default \">\n\n\t\t<!-- Header -->\n\t\t<div class=\"row panel-heading control-panel\">\n\t\t\t<h3 class=\"col-sm-6\">Topology Templates</h3>\n\t\t\t\n\t\t\t<!-- New Button -->\n\t\t\t<button class=\"w3-right w3-green btn btn-primary\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#createTopologyTemplateArea\">\n\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New\n\t\t\t</button>\n\t\t\t\n\t\t\t<!-- Import Button-->\n\t\t\t<button class=\"w3-right w3-theme-l1 btn btn-primary\" id=\"import\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#importAreaTopologyTemplate\">\n\t\t\t\t<i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Import\n\t\t\t</button>\n\t\t</div>\n\n\t\t<!-- Data panel for user input for creating a new TopologyTemplate -->\n\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"createTopologyTemplateArea\">\n\t\t\t<form #createTopologyTemplateForm=\"ngForm\">\n\t\t\t\t<div class=\"col-sm-12 form-group\">\n\t\t\t\t\t<label for=\"nameTopologyTemplate\">Name:</label> <input #nameTopologyTemplate #nameTopologyTemplate=\"ngModel\" name=\"name\" type=\"text\" [(ngModel)]=\"createdTopologyTemplate.name\" class=\"form-control\" id=\"nameTopologyTemplate\" value=\"{{createdTopologyTemplate.name}}\" required>\n\t\t\t\t\t<div *ngIf=\"nameTopologyTemplate.errors && (nameTopologyTemplate.dirty || nameTopologyTemplate.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t<div [hidden]=\"!nameTopologyTemplate.errors.required\">Name is required</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!createTopologyTemplateForm.form.valid\" (click)=\"createTopologyTemplate()\">Create</button>\n\t\t\t</form>\n\t\t</div>\n\t\t\n\t\t<!-- Import Panel -->\n\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"importAreaTopologyTemplate\">\n\t\t\t<form>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"file\">XML-File: </label> <input class=\"form-control\" #file type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)=\"importTopologyTemplate()\">Upload</button>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n\n\t<!-- Data Table -->\n\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\n\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\n\t\t\t<thead>\n\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t<th class=\"table-head\"></th>\n\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t<th class=\"table-head\">Name</th>\n\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t<th class=\"table-head\">Modeller</th>\n\t\t\t\t\t<th class=\"table-head\">Edit</th>\n\t\t\t\t\t<th class=\"table-head\">Export</th>\n\t\t\t\t\t<th class=\"table-head\">Delete</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let topology of topologyTemplates\">\n\t\t\t\t\t<td routerLink=\"/dashboard/topologytemplatedetails\" [queryParams]=\"{id: topology.id}\"><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\n\t\t\t\t\t<td routerLink=\"/dashboard/topologytemplatedetails\" [queryParams]=\"{id: topology.id}\">{{ topologyTemplates.indexOf(topology) +1 }}</td>\n\t\t\t\t\t<td routerLink=\"/dashboard/topologytemplatedetails\" [queryParams]=\"{id: topology.id}\">{{ topology.name }}</td>\n\t\t\t\t\t<td routerLink=\"/dashboard/topologytemplatedetails\" [queryParams]=\"{id: topology.id}\">{{ topology.id }}</td>\n\t\t\t\t\t<td><button class=\"w3-blue btn\" type=\"button\" routerLink=\"/dashboard/topologymodeller\" [queryParams]=\"{name: topology.name, id: topology.id}\">Modeller</button></td>\n\t\t\t\t\t<td><button class=\"w3-blue btn\" type=\"button\" data-toggle=\"modal\" data-target=\"#editTopologyTemplateModal\" (click)=\"setEditTopologyTemplate(topology)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button></td>\n\t\t\t\t\t<td><button class=\"btn\" type=\"button\" (click)=\"exportTopologyTemplate(topology)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button></td>\n\t\t\t\t\t<td><button class=\"w3-red btn\" (click)=\"deleteTopologyTemplate(topology.id)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\t<div class=\"bottom_collapse_area\"></div>\n\n</div>\n\n<!-- Modal for Edit TopologyTemplate -->\n<div class=\"modal fade modal-position\" id=\"editTopologyTemplateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Topology Template</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"input-panel\">\n\t\t\t\t<form #editTopologyTemplateForm=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t\t<label for=\"editName\">Name: </label> <input #editName type=\"text\" name=\"name\" class=\"form-control\" id=\"editName\" value=\"{{editTopologyTemplate.name}}\" required>\n\t\t\t\t\t\t<div *ngIf=\"editName.errors && (editName.dirty || editName.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div [hidden]=\"!editName.errors.required\">Name is required</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!editTopologyTemplateForm.form.valid\" (click)=\"updateTopologyTemplate(editName.value)\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<!-- LevelGraphDetailsComponent -->\n<div class=\"dashboard_area\">\n\t\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tTopology Template Name: <input disabled style=\"color: black\" value=\"{{currentTopologyTemplate.name}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tTopology Template ID: <input disabled style=\"color: black\" value=\"{{currentTopologyTemplate.id}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Tab Panel -->\n\t<div class=\"data-panel \">\n\t\t\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#levelGraphNode\" style=\"color: white\" role=\"tab\">Node Template</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#levelGraphRelation\" style=\"color: white\" role=\"tab\">Relationship Template</a></li>\n\t\t</ul>\n\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content tab-panel\">\n\t\t\t\n\t\t\t<div id=\"levelGraphNode\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!--  Selector for the NodeTypeComponent -->\n\t\t\t\t<app-nodetemplate [currentTopologyTemplate]=\"currentTopologyTemplate\"></app-nodetemplate>\n\t\t\t</div>\n\t\t\t\n\t\t    <div id=\"levelGraphRelation\" class=\"rounded tab-pane \" role=\"tabpanel\">\n\t\t\t\t<!-- Selector for the RelationshipTypeComponent -->\n\t\t\t\t<app-relationshiptemplate [currentRelationshipTemplates]=\"currentTopologyTemplate.relationshipTemplates\"></app-relationshiptemplate>\n\t\t\t</div>\n\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<!-- NodeTypeComponent Area -->\r\n<div class=\"tab-panel rounded\">\r\n\r\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area \">\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t\r\n\t\t\t<!-- Header -->\r\n\t\t\t<div class=\"row panel-heading control-panel\">\r\n\r\n\t\t\t\t<h3 class=\"col-sm-3\">Node Types</h3>\r\n\r\n\t\t\t\t<button class=\"w3-right w3-green btn\" id=\"createNodeType\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\"\r\n\t\t\t\t\thref=\"#createNodeTypeFieldsArea\">\r\n\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New\r\n\t\t\t\t</button>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- Control Panel -->\r\n\t\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"createNodeTypeFieldsArea\">\r\n\t\t\t\t<form #createNodeTypeForm=\"ngForm\">\r\n\r\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\r\n\t\t\t\t\t\t<label for=\"nameNodeType\">Name: </label> <input #nameNodeType=\"ngModel\" name=\"name\" [(ngModel)]=\"createdNodeType.name\" #nameNodeType type=\"text\"\r\n\t\t\t\t\t\t\tclass=\"form-control\" id=\"nameNodeType\" value=\"{{createdNodeType.name}}\" required>\r\n\t\t\t\t\t\t<div *ngIf=\"nameNodeType.errors && (nameNodeType.dirty || nameNodeType.touched)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<div [hidden]=\"!nameNodeType.errors.required\">Name is required</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\r\n\t\t\t\t\t\t<label for=\"icon\">Icon: </label> <input  class=\"form-control\" #icon type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!createNodeTypeForm.form.valid\" (click)=\"createNodeType()\">Create</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- Data Table -->\r\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\r\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\r\n\t\t\t\t\t\t<th class=\"table-head\"></th>\r\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\r\n\t\t\t\t\t\t<th class=\"table-head\">Name</th>\r\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\r\n\t\t\t\t\t\t<th class=\"table-head\">Edit</th>\r\n\t\t\t\t\t\t<th class=\"table-head\">Delete</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let nodeType of nodeTypes\">\r\n\t\t\t\t\t\t<td routerLink=\"/dashboard/nodetypedetails\" [queryParams]=\"{id: nodeType.id}\"><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\r\n\t\t\t\t\t\t<td routerLink=\"/dashboard/nodetypedetails\" [queryParams]=\"{id: nodeType.id}\">{{ nodeTypes.indexOf(nodeType) + 1 }}</td>\r\n\t\t\t\t\t\t<td routerLink=\"/dashboard/nodetypedetails\" [queryParams]=\"{id: nodeType.id}\">{{ nodeType.name }}</td>\r\n\t\t\t\t\t\t<td routerLink=\"/dashboard/nodetypedetails\" [queryParams]=\"{id: nodeType.id}\">{{ nodeType.id }}</td>\r\n\t\t\t\t\t\t<td><button type=\"button\" data-toggle=\"modal\" data-target=\"#editNodeTypeModal\" class=\"w3-blue btn\" (click)=\"setEditNodeType(nodeType)\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t</button></td>\r\n\t\t\t\t\t\t<td><button class=\"w3-red btn\" (click)=\"deleteNodeType(nodeType.id)\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t</button></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Modal for Edit Node Type-->\r\n<div class=\"modal fade modal-position\" id=\"editNodeTypeModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\"\r\n\taria-hidden=\"true\">\r\n\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t<div class=\" w3-theme-l1 modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Node Type</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"  input-panel\">\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"name\">Name: </label> <input #editName type=\"text\" class=\"form-control\" id=\"name\" value=\"{{editNodeType.name}}\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"updateNodeType(editName.value)\" data-dismiss=\"modal\">Save</button>\r\n\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<!-- General Data Component -->\n<div class=\"tab-panel rounded\">\n\n\t<div class=\"w3-theme-l1 input-panel\">\n\t\t<form>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>ID: </label> <input class=\"form-control\" value=\"{{currentNodeType.id}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label for=\"nameNodeType\">Name: </label> <input disabled #nameNodeType type=\"text\" class=\"form-control\" value=\"{{currentNodeType.name}}\" required>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t<label for=\"icon\">Icon Path: </label> <input class=\"  form-control\" #icon value=\"{{currentNodeType.icon}}\" disabled />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label>Icon View: </label> <img class=\" form-control w3-right icon\" src=\"{{currentNodeType.icon}}\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Repository ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentNodeType.repositoryId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/repository\" [queryParams]=\"{id: currentNodeType.repositoryId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\t</div>\n\n</div>"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<!-- NodeTypeDetails Component Area -->\n<div class=\"dashboard_area\">\n\t\n\t<!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tNode Type Name: <input disabled style=\"color: black\" value=\"{{currentNodeType.name}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tNode Type ID: <input disabled style=\"color: black\" value=\"{{currentNodeType.id}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Tab Panel -->\n\t<div class=\"data-panel \">\n\t\t\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\t\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#general\" style=\"color: white\" role=\"tab\">General Data</a></li>\n\t\t    <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#providedproperty\" style=\"color: white\" role=\"tab\">Provided Properties</a></li>\n<!-- \t\t    <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#expectedproperty\" style=\"color: white\" role=\"tab\">Expected Properties</a></li>\n -->\t\t</ul>\n\t\t\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content  tab-panel\">\n\t\t\t\n\t\t\t<div id=\"general\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector GeneralData Component -->\n\t\t\t\t<app-generaldata [currentNodeType]=\"currentNodeType\"></app-generaldata>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div id=\"providedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<!-- Selector ProvidedProperty Component -->\n\t\t\t\t<app-providedproperty [entity]=\"currentNodeType\"></app-providedproperty>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!--  <div id=\"expectedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\tSelector ExpectedProperty\n\t\t\t\t<app-expectedproperty [entity]=\"currentNodeType\"></app-expectedproperty>\n\t\t\t</div> -->\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<!-- RelationshipType Area -->\n<div class=\"tab-panel rounded\">\n\n\t<div id=\"accordion\" class=\"w3-theme-d2 panel-group collapsed_area\">\n\n\t\t<div class=\"panel panel-default\">\n\n\t\t\t<!-- Header -->\n\t\t\t<div class=\"row panel-heading control-panel\">\n\n\t\t\t\t<h3 class=\"col-sm-4\">Relationship Types</h3>\n\n\t\t\t\t<button class=\"w3-right w3-green btn\" id=\"createRelationshipType\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" href=\"#createRelationshipTypeFieldsArea\">\n\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New\n\t\t\t\t</button>\n\n\t\t\t</div>\n\n\t\t\t<!-- Control Panel -->\n\t\t\t<div class=\"collapse panel-collapse w3-theme-l1 input-panel\" id=\"createRelationshipTypeFieldsArea\">\n\t\t\t\t<form #createRelationshipTypeForm=\"ngForm\">\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"relationshipTypeName\">Name: </label> <input #relationshipTypeName #relationshipTypeName=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\" id=\"relationshipTypeName\" [(ngModel)]=\"createdRelationshipType.name\" type=\"text\" class=\"form-control\" value=\"{{createdRelationshipType.name}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"relationshipTypeName.errors && (relationshipTypeName.dirty || relationshipTypeName.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t<div [hidden]=\"!relationshipTypeName.errors.required\">Name is required</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t<label for=\"icon\">Icon: </label> <input class=\"form-control\" #icon type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" [disabled]=\"!createRelationshipTypeForm.form.valid\" class=\"btn btn-success\" (click)=\"createRelationshipType()\">Create</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<!-- Data Table -->\n\t\t<div class=\"middle_collapse_area col-12-sm w3-responsive w3-theme-l1 table-container\">\n\t\t\t<table class=\"w3-table-all table-striped w3-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class=\"w3-theme-d3\">\n\t\t\t\t\t\t<th class=\"table-head\"></th>\n\t\t\t\t\t\t<th class=\"table-head\">Nr.</th>\n\t\t\t\t\t\t<th class=\"table-head\">Name</th>\n\t\t\t\t\t\t<th class=\"table-head\">ID</th>\n\t\t\t\t\t\t<th class=\"table-head\">Edit</th>\n\t\t\t\t\t\t<th class=\"table-head\">Delete</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let relationshipType of relationshipTypes\">\n\t\t\t\t\t\t<td routerLink=\"/dashboard/relationshiptypedetails\" [queryParams]=\"{id: relationshipType.id}\"><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></td>\n\t\t\t\t\t\t<td routerLink=\"/dashboard/relationshiptypedetails\" [queryParams]=\"{id: relationshipType.id}\">{{ relationshipTypes.indexOf(relationshipType) + 1 }}</td>\n\t\t\t\t\t\t<td routerLink=\"/dashboard/relationshiptypedetails\" [queryParams]=\"{id: relationshipType.id}\">{{ relationshipType.name }}</td>\n\t\t\t\t\t\t<td routerLink=\"/dashboard/relationshiptypedetails\" [queryParams]=\"{id: relationshipType.id}\">{{ relationshipType.id }}</td>\n\t\t\t\t\t\t<td><button type=\"button\" data-toggle=\"modal\" data-target=\"#editRelationshipTypeModal\" class=\"w3-blue btn\" (click)=\"setEditRelationshipType(relationshipType)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t<td><button class=\"w3-red btn\" (click)=\"deleteRelationshipType(relationshipType.id)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- Modal for Edit RelationshipType-->\n<div class=\"modal fade modal-position\" id=\"editRelationshipTypeModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"true\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\" w3-theme-l1 modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Relationship Type</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"  input-panel\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name: </label> <input #editName type=\"text\" class=\"form-control\" id=\"name\" value=\"{{editRelationshipType.name}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"updateRelationshipType(editName.value)\" data-dismiss=\"modal\">Save</button>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<!-- General Data Component -->\n<div class=\"tab-panel rounded\">\n\n\t<div class=\"w3-theme-l1 input-panel\">\n\t\t<form>\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>ID: </label> <input class=\"form-control\" value=\"{{currentRelationshipType.id}}\" disabled>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label for=\"nameRelationshipType\">Name: </label> <input disabled #nameRelationshipType type=\"text\" class=\"form-control\" value=\"{{currentRelationshipType.name}}\" required>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t<label for=\"icon\">Icon Path: </label> <input class=\"  form-control\" #icon value=\"{{currentRelationshipType.icon}}\" disabled />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2 form-group\">\n\t\t\t\t\t<label>Icon View: </label> <img class=\" form-control w3-right icon\" src=\"{{currentRelationshipType.icon}}\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t<label>Repository ID: </label> <input class=\"form-control col-sm-5\" value=\"{{currentRelationshipType.repositoryId}}\" disabled>\n\t\t\t\t\t<button class=\"w3-blue col-sm-1 btn w3-right\" type=\"button\" routerLink=\"/dashboard/repository\" [queryParams]=\"{id: currentRelationshipType.repositoryId}\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</form>\n\t</div>\n\n</div>"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<!-- RepositoryDetailsComponent Area -->\n<div class=\"dashboard_area\">\n\n    <!-- Header -->\n\t<div class=\"w3-theme-d4 row panel-heading control-panel\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tRelationship Type Name: <input disabled style=\"color: black\" value=\"{{currentRelationshipType.name}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<h2>\n\t\t\t\tRelationship Type ID: <input disabled style=\"color: black\" value=\"{{currentRelationshipType.id}}\"/>\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Tab Panel -->\n\t<div class=\"data-panel \">\n\t\t\n\t\t<!-- Tab Header -->\n\t\t<ul class=\"tabrow nav\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#general\" style=\"color: white\" role=\"tab\">General Data</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#providedproperty\" style=\"color: white\" role=\"tab\">Provided Properties</a></li>\n<!-- \t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#expectedproperty\" style=\"color: white\" role=\"tab\">Expected Properties</a></li>\n -->\t\t</ul>\n\t\t\n\t\t<!-- Tab Content -->\n\t\t<div class=\"tab-content  tab-panel\">\n\t\t\t<div id=\"general\" class=\"rounded tab-pane active\" role=\"tabpanel\">\n\t\t\t\t<app-generaldata [currentRelationshipType]=\"currentRelationshipType\"></app-generaldata>\n\t\t\t</div>\n\t\t\t<div id=\"providedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<app-providedproperty [entity]=\"currentRelationshipType\"></app-providedproperty>\n\t\t\t</div>\n\t\t\t<!-- <div id=\"expectedproperty\" class=\"rounded tab-pane\" role=\"tabpanel\">\n\t\t\t\t<app-expectedproperty [entity]=\"currentRelationshipType\"></app-expectedproperty>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph_node__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNode; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - LevelGraphNode - A node of a LevelGraph
 *
 * @superclass - Entity
 * @superField - id: number - ID of the LevelGraphNode
 * @superField - name: string - Name of the LevelGraphNode
 * @superField - expectedProperties: ExpectedProperty[] - Array of expected properties of the LevelGraphNode
 * @superField - providedProperties: ProvidedProperty[] - Array of provided properties of the LevelGraphNode
 *
 * @superclass - Node
 * @superField - x: number - x Position of the left upper corner of a rectangle
 * @superField - y: number - y Position of the left upper corner of a rectangle
 * @superField - width: number - Width of the rectangle
 * @superField - height: number - Height of the rectangle
 *
 * @field - level: Level - Level of the LevelGraphNode
 * @field - levelId: number - ID of the Level of the LevelGraphNode
 * @field - levelDepth: number - Level depth of the LevelGraphNode
 * @field - levelGraph: LevelGraph - LevelGraph of the LevelGraphNode
 * @field - levelGraphId: number - ID of the LevelGraph of the LevelGraphNode
 * @field - inLevelGraphRelations: LevelGraphRelation[] - Array of all incoming relations of the node
 * @field - outLevelGraphRelations: LevelGraphRelation[] - Array of all outgoing relations of the node
 * @field - levelGraphNodeType: string - Type of the LevelGraphNode;
 * @field - levelGraphNodeTypeId: number - ID of the Type of the LevelGraphNode
 *
 * @author Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var LevelGraphNode = (function (_super) {
    __extends(LevelGraphNode, _super);
    function LevelGraphNode() {
        var _this = _super.call(this) || this;
        _this.inLevelGraphRelations = [];
        _this.outLevelGraphRelations = [];
        return _this;
    }
    return LevelGraphNode;
}(__WEBPACK_IMPORTED_MODULE_0__graph_node__["a" /* Node */]));

//# sourceMappingURL=levelgraphnode.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph_relation__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphRelation; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - LevelGraphRelation - A relation of a LevelGraph
 *
 * @Entity
 * @superField - id: number - ID of the LevelGraphNode
 * @superField - name: string - Name of the LevelGraphNode
 * @superField - expectedProperties: ExpectedProperty[] - Array of expected properties of the LevelGraphNode
 * @superField - providedProperties: ProvidedProperty[] - Array of provided properties of the LevelGraphNode
 *
 * @Relation
 * @superField - sourceNodeId: number - ID of the Source Node of LevelGraphRelation
 * @superField - targetNodeId: number - ID of the Target Node of LevelGraphRelation
 * @superField - path: Path - Path of the line from source node to target node
 *
 * @field - sourceLevelDepth: number - Depth of the level of the source node
 * @field - targetLevelDepth: number - Depth of the level of the target node
 * @field - sourceLevelId: number - ID of the source level
 * @field - targetLevelId: number - ID of the target level
 * @field - sourceLevel: Level - Source level object
 * @field - targetLevel: Level - Target level object
 * @field - targetLevelGraphNode: LevelGraphNode - Target LevelGraphNode of the levelGraphRelation
 * @field - sourceLevelGraphNode: LevelGraphNode - Source LevelGraphNode of the levelGraphRelation
 * @field - levelGraph: LevelGraph - LevelGraph of the LevelGraphReltation
 * @field - levelGraphId: number - ID of the LevelGraph of the LevelGraphRelation
 * @field - levelGraphRelationType: string - Type of the LevelGraphRelation
 * @hint:    You may decide to implement later the types as a Class for further improvment currently it is enough to implement it as constant Strings
 * @field - entryPoint: boolean - True if a LevelGraphRelation of type REFINE_TO is a outgoing relation of a LevelGraphNode of type NODEFTYPERAGMENT or RELATIONSHIPTYPEFRAGMENT and its target
 *                                LevelGraphNode is a EntryPoint of the Fragment. Default is false.
 * @field - exitPoint: boolean - True if a LevelGraphRelation of type REFINE_TO is a outgoing relation of a LevelGraphNode of type fragment and its target LevelGraphNode is a ExitPoint of the Fragment.
 *                               Default is false.
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var LevelGraphRelation = (function (_super) {
    __extends(LevelGraphRelation, _super);
    function LevelGraphRelation(sourceLevelDepth, targetLevelDepth, sourceNodeId, targetNodeId, levelGraphId, path, levelGraphRelationType) {
        var _this = _super.call(this, sourceNodeId, targetNodeId, path) || this;
        _this.levels = [];
        _this.entryPoint = false;
        _this.exitPoint = false;
        _this.sourceLevelDepth = sourceLevelDepth;
        _this.targetLevelDepth = targetLevelDepth;
        _this.levelGraphId = levelGraphId;
        _this.levelGraphRelationType = levelGraphRelationType;
        return _this;
    }
    /*******************************************************************************************************************************************************************************************************
     *
     * @method - isTargetNodeSourceNodeInSameLevel
     *
     ******************************************************************************************************************************************************************************************************/
    LevelGraphRelation.prototype.isTargetNodeSourceNodeInSameLevel = function () {
        return (this.sourceLevelId === this.targetLevelId);
    };
    return LevelGraphRelation;
}(__WEBPACK_IMPORTED_MODULE_0__graph_relation__["a" /* Relation */]));

//# sourceMappingURL=levelgraphrelation.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__property__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpectedProperty; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - ExpectedProperty - ExpectedProperties are name value pairs which should be fulfilled by a specific kind of the owner. Inherited from <Entity>
 *
 * @superclass - Property
 * @superField - id: number - Id of the ExpectedProperty
 * @superField - name: string - Name of the ExpectedProperty
 * @superField - value: string - Value of the ExpectedProperty
 *
 * @field - entityProvided: Entity - owner of the ExpectedProperty
 * @field - entityProvidedId: number - ID of the owner of the ExpectedProperty
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var ExpectedProperty = (function (_super) {
    __extends(ExpectedProperty, _super);
    function ExpectedProperty(name, value) {
        return _super.call(this, name, value) || this;
    }
    return ExpectedProperty;
}(__WEBPACK_IMPORTED_MODULE_0__property__["a" /* Property */]));

//# sourceMappingURL=expectedproperty.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__property__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidedProperty; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - ProvidedProperty - ProvidedProperties are name value pairs which are provided through the owner. Inherited from Property
 *
 * @superclass - Property
 * @superField - id: number - Id of the Property
 * @superField - name: string - Name of the Property
 * @superField - value: string - Value of the Property
 *
 * @field - entityProvided: Entity - owner of the Property
 * @field - entityProvidedId: number - ID of the owner of the Property
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var ProvidedProperty = (function (_super) {
    __extends(ProvidedProperty, _super);
    function ProvidedProperty(name, value) {
        return _super.call(this, name, value) || this;
    }
    return ProvidedProperty;
}(__WEBPACK_IMPORTED_MODULE_0__property__["a" /* Property */]));

//# sourceMappingURL=providedproperty.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph_node__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTemplate; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - NodeTemplate - A node of a TopologyTemplate
 *
 * @Class Entity
 * @superField - id: number - ID of the NodeTemplate
 * @superField - name: string - Name of the NodeTemplate
 * @superField - expectedProperties: ExpectedProperty[] - Array of expected properties of the NodeTemplate
 * @superField - providedProperties: ProvidedProperty[] - Array of provided properties of the NodeTemplate
 *
 * @Class Node
 * @superField - x: number - x Position of the left upper corner of a rectangle
 * @superField - y: number - y Position of the left upper corner of a rectangle
 * @superField - width: number - Width of the rectangle
 * @superField - height: number - Height of the rectangle
 *
 * @field - levelGraphNode: LevelGraphNode - LevelGraphNode from which the NodeTemplate was created
 * @field - levelGraphNodeId: number - ID of the LevelGraphNode from which the NodeTemplate was created
 * @field - nodeType: NodeType - NodeType of the NodeTemplate
 * @field - nodeTypeId: number - ID of NodeType of the NodeTemplate
 * @field - inRelationshipTemplates: RelationshipTemplate[] - Array of all outgoing and incoming RelationshipTemplates of the NodeTemplate
 * @field - outRelationshipTemplates: RelationshipTemplate[] - Array of all outgoing and incoming RelationshipTemplates of the NodeTemplate
 * @field - topologyTemplate: TopologyTemplate - TopologyTemplate of the NodeTemplate
 * @field - topologyTemplateId: number - ID of TopologyTemplate of the NodeTemplate
 * @field - abstractionLevel: number - Level of abstraction of the NodeTemplate
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var NodeTemplate = (function (_super) {
    __extends(NodeTemplate, _super);
    function NodeTemplate() {
        var _this = _super.call(this) || this;
        _this.inRelationshipTemplates = [];
        _this.outRelationshipTemplates = [];
        return _this;
    }
    return NodeTemplate;
}(__WEBPACK_IMPORTED_MODULE_0__graph_node__["a" /* Node */]));

//# sourceMappingURL=nodetemplate.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph_relation__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipTemplate; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - RelationshipTemplate - A relation between two NodeTemplates
 *
 * @Class Entity
 * @superField - id: number - ID of the RelationshipTemplate
 * @superField - name: string - Name of the RelationshipTemplate
 * @superField - expectedProperties: ExpectedProperty[] - Array of expected properties of the RelationshipTemplate
 * @superField - providedProperties: ProvidedProperty[] - Array of provided properties of the RelationshipTemplate
 *
 * @Class Relation
 * @superField - sourceNodeId: number - ID of the Source Node of RelationshipTemplate
 * @superField - targetNodeId: number - ID of the Target Node of RelationshipTemplate
 * @superField - path: Path - Path of the line from source node to target node
 *
 * @field - levelGraphNode: LevelGraphNode - LevelGraph Node from which this RelationshipTemplate is derived
 * @field - levelGraphNodeId: number - ID of the LevelGraph Node form which the RelationshipTemplate is derived
 * @field - relationshipType: RelationshipType - RelationshipType of the RelationshipTemplate
 * @field - relationshipTypeId: number - ID of the RelationshipType
 * @field - sourceNodeTemplate: NodeTemplate - Source and Target NodeTemplate of the RelationshipTemplate
 * @field - targetNodeTemplate: NodeTemplate - Source and Target NodeTemplate of the RelationshipTemplate
 * @field - topologyTemplate: TopologyTemplate - TopologyTemplate of the RelationshipTemplate
 * @field - topologyTemplateId: number - ID of the TopologyTemplate
 * @field - abstractionLevel: number - Level of abstraction of the RelationshipTemplate
 *
 * @author Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var RelationshipTemplate = (function (_super) {
    __extends(RelationshipTemplate, _super);
    function RelationshipTemplate(sourceNodeId, targetNodeId, path, relationshipTypeId, topologyTemplateId) {
        var _this = _super.call(this, sourceNodeId, targetNodeId, path) || this;
        _this.relationshipTypeId = relationshipTypeId;
        _this.topologyTemplateId = topologyTemplateId;
        return _this;
    }
    return RelationshipTemplate;
}(__WEBPACK_IMPORTED_MODULE_0__graph_relation__["a" /* Relation */]));

//# sourceMappingURL=relationshiptemplate.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_entity__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeType; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - NodeType - NodeType inherited from Entity it is the type of a NodeTemplate or of a LevelGraphNode
 *
 * @superField - id: number - ID of the NodeType
 * @superField - name: string - Name of the NodeType
 * @superField - expectedProperties: ExpectedProperty[] - Array of expected properties of the NodeType
 * @superField - providedProperties: ProvidedProperty[] - Array of provided properties of the NodeType
 * @superField - icon: String - URL of the icon for representation inherited from Entity
 *
 * @field - repository: Repository - Repository of the NodeType
 * @field - repositoryId: string - ID of the Repository of the NodeType
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var NodeType = (function (_super) {
    __extends(NodeType, _super);
    function NodeType() {
        var _this = _super.call(this) || this;
        // default icon
        _this.icon = '/assets/img/nodeTypeDefault.png';
        return _this;
    }
    return NodeType;
}(__WEBPACK_IMPORTED_MODULE_0__entity_entity__["a" /* Entity */]));

//# sourceMappingURL=nodetype.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_entity__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipType; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*******************************************************************************************************************************************************************************************************
 *
 * @class - RelationshipType - RelationshipType inherited from Entity it is the type of a RelationshipTemplate or of a LevelGraphNode
 *
 * @field - repository: Repository - Repository of the RelationshipType
 * @field - repositoryId: string - ID of the Repository of the RelationshipType
 *
 * @author - Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
var RelationshipType = (function (_super) {
    __extends(RelationshipType, _super);
    function RelationshipType() {
        var _this = _super.call(this) || this;
        // default icon
        _this.icon = '/assets/img/relationTypeDefault.png';
        return _this;
    }
    return RelationshipType;
}(__WEBPACK_IMPORTED_MODULE_0__entity_entity__["a" /* Entity */]));

//# sourceMappingURL=relationshiptype.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_level__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - LevelService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for Level Data
 *
 *********************************************************************************************************************************************************************************************************/
var LevelService = LevelService_1 = (function () {
    function LevelService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.levelUrl = '/api/levels';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getLevel - Send GET Level REQUEST
     *
     * @param - id: number - ID of the Level which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelService.prototype.getLevel = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVEL]: Send GET Level Request with ID:' + id, LevelService_1.name);
        return this.http.get(this.levelUrl + '/' + id).map(this.extractLevel).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createLevel - Send POST Level REQUEST
     *
     * @param - level: Level - Level which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    LevelService.prototype.createLevel = function (level) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVEL]: Send POST Request Level', LevelService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVEL]: ' + JSON.stringify(level), LevelService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.levelUrl, level, options).map(this.extractLevel).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateLevel - Send PUT Level REQUEST
     *
     * @param - level: Level - Level which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    LevelService.prototype.updateLevel = function (level) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVEL]: Send PUT Request Level', LevelService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVEL]: ' + JSON.stringify(level), LevelService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.levelUrl + '/' + level.id, level, options).map(this.extractLevel).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteLevel - Send DELETE Level REQUEST
     *
     * @param - id: number - ID of the Level which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelService.prototype.deleteLevel = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVEL]: Send DELETE Request Level', LevelService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.levelUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractLevel- Extract data from response data Level object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelService.prototype.extractLevel = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVEL]:  Extract Level Data', LevelService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVEL]: ' + JSON.stringify(body), LevelService_1.name);
        var level = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_level__["a" /* Level */](body.depth, body.y, body.levelGraphId);
        level = body;
        return level || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return LevelService;
}());
LevelService = LevelService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], LevelService);

var LevelService_1, _a;
//# sourceMappingURL=level.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelGraphNodeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**********************************************************************************************************************************************************************************************************
 *
 * @service - LevelGraphNodeService implements the calls to the rest interface of the application server and
 *            handle the request construction and response extraction for LevelGraphNodes
 *
 *********************************************************************************************************************************************************************************************************/
var LevelGraphNodeService = LevelGraphNodeService_1 = (function () {
    function LevelGraphNodeService(http) {
        this.http = http;
        // URL of the REST Interface End-Point
        this.levelGraphNodeUrl = '/api/levelgraphnodes';
    }
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getLevelGraphNodes - Send GET all Level Graph Nodes REQUEST
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.getLevelGraphNodes = function () {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHNODE]: Send GET Level Graph Nodes Request', LevelGraphNodeService_1.name);
        return this.http.get(this.levelGraphNodeUrl).map(this.extractLevelGraphNodes).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - getLevelGraphNode - Send GET Level Graph Node REQUEST
     *
     * @param - id: number - ID of the LevelGraphNode which should be retrieved from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.getLevelGraphNode = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHNODE]: Send GET Level Graph Node Request with ID: ' + id, LevelGraphNodeService_1.name);
        return this.http.get(this.levelGraphNodeUrl + '/' + id).map(this.extractLevelGraphNode).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - createLevelGraphNode - Send POST Level Graph Node REQUEST
     *
     * @param - levelGraphNode: LevelGraphNode - LevelGraphRelation which should be created
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.createLevelGraphNode = function (levelGraphNode) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHNODE]: Send POST Level Graph Node Request', LevelGraphNodeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVELGRAPHNODE]: ' + JSON.stringify(levelGraphNode), LevelGraphNodeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.levelGraphNodeUrl, levelGraphNode, options).map(this.extractLevelGraphNode).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - updateLevelGraphNode - Send PUT Level Graph Node REQUEST
     *
     * @param - levelGraphNode: LevelGraphNode - LeveLevelGraphNodelGraphRelation which should be updated
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.updateLevelGraphNode = function (levelGraphNode) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHNODE]: Send PUT Level Graph Node Request', LevelGraphNodeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].data('[REQUEST - LEVELGRAPHNODE]: ' + JSON.stringify(levelGraphNode), LevelGraphNodeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.levelGraphNodeUrl + '/' + levelGraphNode.id, levelGraphNode, options).map(this.extractLevelGraphNode).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @request - deleteLevelGraphNode - Send DELETE Level Graph Node  REQUEST
     *
     * @param - id: number - ID of the LevelGraphNode which should be deleted from the database
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.deleteLevelGraphNode = function (id) {
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[REQUEST - LEVELGRAPHNODE]: Send DELETE Level Graph Node Request', LevelGraphNodeService_1.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.levelGraphNodeUrl + '/' + id, options).map(function (res) { return res; }).catch(this.handleError);
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractLevelGraphNodes - Extract data from response data list
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.extractLevelGraphNodes = function (res) {
        var body = res.json();
        var levelGraphList = [];
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPHNODE]: Extract Level Graph Node Data List', LevelGraphNodeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPHNODE]: ' + JSON.stringify(body), LevelGraphNodeService_1.name);
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var levelGraphNode = body_1[_i];
            var tempLevelGraphNode = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__["a" /* LevelGraphNode */]();
            tempLevelGraphNode = levelGraphNode;
            levelGraphList.push(tempLevelGraphNode);
        }
        return levelGraphList || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @response - extractLevelGraphNode - Extract data from response data object
     *
     * @param - res: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.extractLevelGraphNode = function (res) {
        var body = res.json();
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPHNODE]: Extract Level Graph Node Data', LevelGraphNodeService_1.name);
        __WEBPACK_IMPORTED_MODULE_0__logger_logger__["a" /* Logger */].info('[RESPONSE - LEVELGRAPHNODE]: ' + JSON.stringify(body), LevelGraphNodeService_1.name);
        var levelGraphNode = new __WEBPACK_IMPORTED_MODULE_1__datamodels_levelgraph_levelgraphnode__["a" /* LevelGraphNode */]();
        levelGraphNode = body;
        return levelGraphNode || {};
    };
    /********************************************************************************************************************************************************************************************************
     *
     * @error - handleError - Error Handling
     *
     * @param - error: Response - Response Object
     *
     *******************************************************************************************************************************************************************************************************/
    LevelGraphNodeService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(errMsg);
    };
    return LevelGraphNodeService;
}());
LevelGraphNodeService = LevelGraphNodeService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], LevelGraphNodeService);

var LevelGraphNodeService_1, _a;
//# sourceMappingURL=levelgraphnode.service.js.map

/***/ })

},[1043]);
//# sourceMappingURL=main.bundle.js.map