import { render as base } from '../crud.js';

const CONFIG = {
  "titulo": "Famílias",
  "tabela": "arm_familias",
  "modulo": "familia",
  "singular": "família",
  "ordem": "descricao",
  "filtro": "Código ou descrição",
  "colunas": [
    {
      "campo": "codigo_auxiliar",
      "rotulo": "Código auxiliar",
      "classe": "mono"
    },
    {
      "campo": "descricao",
      "rotulo": "Descrição"
    },
    {
      "campo": "subcategoria_id",
      "rotulo": "Subcategoria",
      "de": {
        "tabela": "arm_subcategorias",
        "rotulo": "descricao"
      }
    }
  ],
  "campos": [
    {
      "campo": "codigo_auxiliar",
      "rotulo": "Código auxiliar"
    },
    {
      "campo": "descricao",
      "rotulo": "Descrição",
      "obrigatorio": true
    },
    {
      "campo": "categoria_id",
      "rotulo": "Categoria",
      "tipo": "select",
      "obrigatorio": true,
      "de": {
        "tabela": "arm_categorias",
        "rotulo": "descricao"
      }
    },
    {
      "campo": "subcategoria_id",
      "rotulo": "Subcategoria",
      "tipo": "select",
      "obrigatorio": true,
      "de": {
        "tabela": "arm_subcategorias",
        "rotulo": "descricao"
      }
    }
  ]
};

export function render(raiz, ctx) {
  return base(raiz, ctx, CONFIG);
}
