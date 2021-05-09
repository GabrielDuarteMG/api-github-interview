import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import "./ReposModal.scss";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

const columns = [
  {
    dataField: "name",
    text: "Nome do Repositório",
    filter: textFilter(),
  },
  {
    dataField: "description",
    text: "Descrição",
    filter: textFilter(),
  },
  {
    dataField: "full_name",
    text: "Link",

    formatter: (cellContent, row) => {
      return (
        <a target="_blank" rel="noreferrer" href={row.html_url}>
          {row.full_name}
        </a>
      );
    },
  },
];

export default class ReposModal extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    const options = {
      custom: true,
      paginationSize: 3,
      sizePerPageList: [
        {
          text: "5th",
          value: 5,
        },
      ],
      pageStartIndex: 1,
      firstPageText: "Primeira",
      prePageText: "Voltar",
      nextPageText: "Próxima",
      lastPageText: "Última",
      nextPageTitle: "First page",
      prePageTitle: "Pré página",
      firstPageTitle: "Próxima página",
      lastPageTitle: "Última página",
      showTotal: true,
      totalSize: this.state.data.length,
    };
    const contentTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <div>
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.state.data}
            columns={columns}
            wrapperClasses="table-responsive"
            filter={filterFactory()}
            {...paginationTableProps}
          />
        </div>

        <div className="pag-limit">
          <PaginationListStandalone {...paginationProps} />
        </div>
      </div>
    );

    return (
      <div>
        <PaginationProvider pagination={paginationFactory(options)}>
          {contentTable}
        </PaginationProvider>
      </div>
    );
  }
}
