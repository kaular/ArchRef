/*********************************************************************************************************************************************************************************************************
 *
 * @class Logger Helper class for customized logging
 *
 * //TODO - Further improvement write a log file to the file system and improve the representation of JSON Objects in the console currently only displayed as string
 *
 * @author Arthur Kaul
 *
 ********************************************************************************************************************************************************************************************************/
export class Logger {

  /*******************************************************************************************************************************************************************************************************
   *
   * @method data - Logger for data objects
   *
   ******************************************************************************************************************************************************************************************************/
  static data(msg: string, classType: any) {
    console.log('[DATA] ' + classType + '  [Message:]  ' + msg);
  }

  /*******************************************************************************************************************************************************************************************************
   *
   * @method data - Logger for info messages
   *
   ******************************************************************************************************************************************************************************************************/
  static info(msg: string, classType: any) {

    console.log('[INFO] ' + classType + '  [Message:]  ' + msg);

  }

  /*******************************************************************************************************************************************************************************************************
   *
   * @method warning - Logger for warning messages
   *
   ******************************************************************************************************************************************************************************************************/
  static warning(msg: string, classType: any) {

    console.warn('[WARNING] ' + classType + '  [Message:]  ' + msg);

  }

  /*******************************************************************************************************************************************************************************************************
   *
   * @method error - Logger for error messages
   *
   ******************************************************************************************************************************************************************************************************/
  static error(msg: string, classType: any) {

    console.error('[ERROR] ' + classType + '  [Message:]  ' + msg);

  }

}
