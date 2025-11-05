import { Container } from 'inversify';
import { Repository } from 'typeorm';

import { AdapterMapperImpl } from './adapter/restful/v1/controller/Mapper/AdapterMapperImpl';
import { IAdapterMapper } from './adapter/restful/v1/controller/Mapper/IAdapterMapper';
import { ProductController } from './adapter/restful/v1/controller/CarroController';
import { ProductControllerImpl } from './adapter/restful/v1/controller/CarroControllerImpl';
import { ProductService } from './application/services/IProductService';
import { ProductServiceImpl } from './domain/ProductServiceImpl';
import { AppDataSource } from './infraestructure/mysql/data-source';
import { Carro } from './infraestructure/mysql/Entity/Carro';
import { IInfraestructureMapper } from './infraestructure/mysql/Mapper/IIfraestructureMapper';
import { InfraestructureMapperImpl } from './infraestructure/mysql/Mapper/InfraestructureMapperImpl';
import { MysqlProductRespository } from './infraestructure/mysql/Respository/MysqlProductRespository';
import { MysqlProductRespositoryImpl } from './infraestructure/mysql/Respository/MysqlProductRespositoryImpl';
import { TYPES } from './ioc/Types';
import { IPresenter } from './presenter/IPresenter';
import { PresenterImpl } from './presenter/PresenterImpl';

const container = new Container();

// Función factory para el Repository
const createProductRepository = (): Repository<Carro> => {
  return AppDataSource.getRepository(Carro);
};

// Configurar DataSource
container.bind(TYPES.DataSource).toConstantValue(AppDataSource);

// Configurar Repository<Carro>
container.bind<Repository<Carro>>(TYPES.RepositoryProduct).toDynamicValue(createProductRepository);

container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl);
container.bind<MysqlProductRespository>(TYPES.MysqlProductRespository).to(MysqlProductRespositoryImpl);
container.bind<IInfraestructureMapper>(TYPES.IInfraestructureMapper).to(InfraestructureMapperImpl);
container.bind<IAdapterMapper>(TYPES.IAdapterMapper).to(AdapterMapperImpl);
container.bind<ProductController>(TYPES.ProductController).to(ProductControllerImpl);
container.bind<IPresenter>(TYPES.IPresenter).to(PresenterImpl);

export { container };
