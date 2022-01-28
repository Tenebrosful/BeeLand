import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

/**
 * Setup
 */

dotenv.config({path: "config/bdd.env"});

/**
 * @type Sequelize
 */
let BDDInstance;

export function initBDD(){
  const instance = new Sequelize('mysql://root@localhost:3306/beeland');
  
  try {
    instance.authenticate();
    BDDInstance = instance;
    return instance;
  }
  catch(error) {
    console.error("Unable to connect to the database", error);
    return null;
  }
}

export function getBDD(){
  return BDDInstance ?? initBDD();
}

export function closeBDD(){
  BDDInstance.close();
}