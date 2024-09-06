import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleDto } from './dto/artcile.dto';

@Injectable()
export class ArticlesService {
  create(data: CreateArticleDto) {
    const article = new ArticleDto();
    article.title = data.title;
    article.text = data.text;
    article.description = data.description;
    article.tags = data.tags;
    article.createdAt = new Date();
    article.updatedAt = new Date();

    return article;
  }

  getList() {
    console.log('Getting list of articles');
  }

  getById(id: number) {
    console.log(`Getting article by id: ${id}`);
  }

  updateById(id: number) {
    console.log(`Update article by id: ${id}`);
  }

  deleteById(id: number) {
    console.log(`Delete article by id: ${id}`);
  }
}
