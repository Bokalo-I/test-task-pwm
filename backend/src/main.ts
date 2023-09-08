import { NestApplication, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { Environment } from '@/shared/variables/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swagger = new DocumentBuilder().setTitle('Test task backend').setVersion('0.0.1').build();

  app.setGlobalPrefix(Environment.API_PREFIX);
  app.enableCors({ credentials: true, origin: Environment.ALLOWED_ORIGINS.split(';') });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  const swaggerDocument = SwaggerModule.createDocument(app, swagger);

  SwaggerModule.setup(`${Environment.API_PREFIX}/docs`, app, swaggerDocument, {
    customCssUrl: Environment.SWAGGER_CSS_URL,
    swaggerOptions: { displayRequestDuration: true },
  });

  await app.listen(Environment.PORT, () => {
    Logger.log(`Api started on port ${Environment.PORT}`, NestApplication.name);
  });
}
bootstrap();
