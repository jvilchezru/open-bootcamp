import { suma, multiplica } from "./modules/controllers.js";
import chalk from "chalk";

const result = multiplica(suma(1, 2), suma(4, 5));

console.log(chalk.green(result));
