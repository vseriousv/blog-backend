import { ArticleEntity } from '../../shared/models/article.entity';

export class ArticleDto {
  id: number;
  title: string;
  text: string;
  description: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(ent: ArticleEntity) {
    this.id = ent.id;
    this.title = ent.title;
    this.text = ent.text;
    this.description = ent.description;
    this.tags = ent.tags;
    this.createdAt = ent.createdAt;
    this.updatedAt = ent.updatedAt;
  }
}
