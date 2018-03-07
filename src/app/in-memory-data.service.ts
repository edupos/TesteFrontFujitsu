
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Produto } from './produtos/produtos.model';
export class InMemoryDataService implements InMemoryDbService {
    createDb() : {} {
        let produtos : Produto[] = [
            {id:1, nome: 'Produto 1', resumo:'hdjgdfj hdgjhfdjhg fsjhsg djhfg sdhg sgjhfgjhsd gsdh gfsdhfgsh',descricao: 'jfsdh jhdf sdhjfs fshdgfhsdg fhg shf sh fsh gfsgfshg fhs  jhsfuy wegefyehu euyf sduyfh uisdh fsdh  fjh sdjfhsdjfh jdh jsh fjish ijfhjsdhfijsdh fjsdh fjhsdjdfhsidhfisdhfioshdfui hsouf hsufhoudh fy sduifhsouihf uisdh fuih suidfhsuih fuishfuih dsiufhsui hf suidhfi shfo siudfhiosudhfi osuh fuishfdui', valor : 50.50},
            {id:2, nome: 'Produto 2', resumo:'kjh gsdjghdgjhfdjhg fsjhsg djhfg sdhg sgjhfgjhsd gsdh gfsdhfgsh',descricao: 'ksdjkh jfsdh jhdf sdhjfs fshdgfhsdg fhg shf sh fsh gfsgfshg fhs  jhsfuy wegefyehu euyf sduyfh uisdh fsdh  fjh sdjfhsdjfh jdh jsh fjish ijfhjsdhfijsdh fjsdh fjhsdjdfhsidhfisdhfioshdfui hsouf hsufhoudh fy sduifhsouihf uisdh fuih suidfhsuih fuishfuih dsiufhsui hf suidhfi shfo siudfhiosudhfi osuh fuishfdui', valor : 60.50},
            {id:3, nome: 'Produto 3', resumo:'hskj dhjksdfhfkjsdh fsjhsg djhfg sdhg sgjhfgjhsd gsdh gfsdhfgsh',descricao: 'fjkdh ksdjkh jfsdh jhdf sdhjfs fshdgfhsdg fhg shf sh fsh gfsgfshg fhs  jhsfuy wegefyehu euyf sduyfh uisdh fsdh  fjh sdjfhsdjfh jdh jsh fjish ijfhjsdhfijsdh fjsdh fjhsdjdfhsidhfisdhfioshdfui hsouf hsufhoudh fy sduifhsouihf uisdh fuih suidfhsuih fuishfuih dsiufhsui hf suidhfi shfo siudfhiosudhfi osuh fuishfdui', valor : 70.50},
            {id:4, nome: 'Produto 4', resumo:'jsd hsdkfjh sdkhjkdjsfhsdjk djhfg sdhg sgjhfgjhsd gsdh gfsdhfgsh',descricao: 'jksdh fjkdh ksdjkh jfsdh jhdf sdhjfs fshdgfhsdg fhg shf sh fsh gfsgfshg fhs  jhsfuy wegefyehu euyf sduyfh uisdh fsdh  fjh sdjfhsdjfh jdh jsh fjish ijfhjsdhfijsdh fjsdh fjhsdjdfhsidhfisdhfioshdfui hsouf hsufhoudh fy sduifhsouihf uisdh fuih suidfhsuih fuishfuih dsiufhsui hf suidhfi shfo siudfhiosudhfi osuh fuishfdui', valor : 80.50},
            {id:5, nome: 'Produto 5', resumo:'hk jhkjsdhsdhjkdhjksdh kjdhkksd jhsdhg sgjhfgjhsd gsdh gfsdhfgsh',descricao: 'jkfhjksdh jksdh fjkdh ksdjkh jfsdh jhdf sdhjfs fshdgfhsdg fhg shf sh fsh gfsgfshg fhs  jhsfuy wegefyehu euyf sduyfh uisdh fsdh  fjh sdjfhsdjfh jdh jsh fjish ijfhjsdhfijsdh fjsdh fjhsdjdfhsidhfisdhfioshdfui hsouf hsufhoudh fy sduifhsouihf uisdh fuih suidfhsuih fuishfuih dsiufhsui hf suidhfi shfo siudfhiosudhfi osuh fuishfdui', valor : 90.50},
            {id:6, nome: 'Produto 6', resumo:'jhj hhkj hjk  kjhjkhkjhkjhjkhkj jkh jsgjhfgjhsd gsdh gfsdhfgsh',descricao: 'jdhs jkfhjksdh jksdh fjkdh ksdjkh jfsdh jhdf sdhjfs fshdgfhsdg fhg shf sh fsh gfsgfshg fhs  jhsfuy wegefyehu euyf sduyfh uisdh fsdh  fjh sdjfhsdjfh jdh jsh fjish ijfhjsdhfijsdh fjsdh fjhsdjdfhsidhfisdhfioshdfui hsouf hsufhoudh fy sduifhsouihf uisdh fuih suidfhsuih fuishfuih dsiufhsui hf suidhfi shfo siudfhiosudhfi osuh fuishfdui', valor : 103.50}
            ];
         return {
            'produtos' : produtos
            };
    }
}