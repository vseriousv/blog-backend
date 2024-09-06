import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly service: ArticlesService) {}

  // http://127.0.0.1:3000/articles HTTP method = POST
  @Post()
  create(@Body() data: CreateArticleDto) {
    return this.service.create(data);
  }

  // http://127.0.0.1:3000/articles HTTP method = GET
  @Get()
  getList() {
    return this.service.getList();
  }

  // http://127.0.0.1:3000/articles/1 HTTP method = GET
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  // http://127.0.0.1:3000/articles/1 HTTP method = PUT
  @Put(':id')
  updateById(@Param('id') id: number) {
    return this.service.updateById(id);
  }

  // http://127.0.0.1:3000/articles/1 HTTP method = DELETE
  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.service.deleteById(id);
  }
}
