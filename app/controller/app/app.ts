import { Controller } from "egg";
import * as Model from '../../mocks/article/list';
export default class AppController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('app/app.js', { url: this.ctx.url.replace(/\/app/, '')});
  }
  async list() {
    const { ctx } = this;
    const pageIndex = ctx.query.pageIndex;
    const pageSize = ctx.query.pageSize;
    ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const { ctx } = this;
    const id = ctx.query.id;
    ctx.body = Model.getDetail(id);
  }
};