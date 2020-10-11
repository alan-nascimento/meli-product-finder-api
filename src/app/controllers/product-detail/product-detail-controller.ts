import { Request, Response } from 'express';

import { Controller } from '@/app/protocols';
import { makeProductDetail } from '@/app/factories';
import { getProduct } from '@/services';

class ProductController implements Controller {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { item, description } = await getProduct(req.params.id);

      const response = makeProductDetail({
        item: item.data,
        description: description.data,
      });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(422).json({ error: error.message });
    }
  }
}

export default new ProductController();
