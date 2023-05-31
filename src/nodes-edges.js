const position = { x: 0, y: 0 };
const edgeType = "default";
const edgeMarkerEndType = {
  type: "arrow",
  color: "#A9A9A9",
  width: "30px",
  height: "30px"
};
const nodeDaliyProfitStyle = {
  background: "#7FFFAA",
  border: "1px solid black",
  borderRadius: 100,
  fontSize: 12
};
const nodeDepositStyle = {
  background: "#F0FFFF",
  border: "1px solid black",
  borderRadius: 100,
  fontSize: 12
};
const nodeInvestBuyStyle = {
  background: "#FFC0CB",
  border: "1px solid black",
  borderRadius: 100,
  fontSize: 12
};
const nodeInvestSellStyle = {
  background: "#00FFFF",
  border: "1px solid black",
  borderRadius: 100,
  fontSize: 12
};
const nodeDroStyle = {
  background: "#D8BFD8"
};
const nodeMoneyStyle = {
  background: "#87CEFA"
};

export const initialNodes = [
  {
    id: "x1",
    type: "input",
    data: { label: "Action: 充值" },
    style: nodeDepositStyle,
    position
  },
  {
    id: "x2",
    type: "circle",
    data: { label: "1,200,000 CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x3",
    data: { label: "Action: 投资" },
    style: nodeInvestBuyStyle,
    position
  },
  {
    id: "x41",
    data: { label: "DRO X_500" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x42",
    data: { label: "DRO Y_500" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x43",
    type: "outout",
    data: { label: "200,000 CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x51",
    data: { label: "Action: 每日分成" },
    style: nodeDaliyProfitStyle,
    position
  },
  {
    id: "x52",
    data: { label: "Action: 每日分成" },
    style: nodeDaliyProfitStyle,
    position
  },
  {
    id: "x61",
    type: "outout",
    data: { label: "5000 CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x62",
    type: "outout",
    data: { label: "4000 CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x63",
    data: { label: "DRO X_500" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x64",
    data: { label: "DRO Y_500" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x71",
    data: { label: "Action: 每日分成" },
    style: nodeDaliyProfitStyle,
    position
  },
  {
    id: "x72",
    data: { label: "Action: 每日分成" },
    style: nodeDaliyProfitStyle,
    position
  },
  {
    id: "x81",
    type: "outout",
    data: { label: "(?) CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x82",
    type: "outout",
    data: { label: "(?) CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x83",
    data: { label: "DRO X_500" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x84",
    data: { label: "DRO Y_500" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x91",
    data: { label: "Action: 投资" },
    style: nodeInvestBuyStyle,
    position
  },
  {
    id: "x92",
    data: { label: "Action: 卖出" },
    style: nodeInvestSellStyle,
    position
  },
  {
    id: "x101",
    data: { label: "DRO X_10" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x102",
    type: "outout",
    data: { label: "490,000 CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x111",
    data: { label: "Action: 每日分成" },
    style: nodeDaliyProfitStyle,
    position
  },
  {
    id: "x112",
    data: { label: "Action: 每日分成" },
    style: nodeDaliyProfitStyle,
    position
  },
  {
    id: "x121",
    type: "outout",
    data: { label: "(?) CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x122",
    type: "outout",
    data: { label: "(?) CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "x123",
    data: { label: "DRO X_10" },
    style: nodeDroStyle,
    position
  },
  {
    id: "x124",
    data: { label: "DRO X_500" },
    style: nodeDroStyle,
    position
  },
  {
    id: "y1",
    type: "input",
    data: { label: "Action: 充值" },
    style: nodeDepositStyle,
    position
  },
  {
    id: "y2",
    data: { label: "200,000 CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "y3",
    data: { label: "Action: 投资" },
    style: nodeInvestBuyStyle,
    position
  },
  {
    id: "y4",
    data: { label: "DRO Z_400" },
    style: nodeDroStyle,
    position
  },
  {
    id: "y5",
    data: { label: "Action: 每日分成" },
    style: nodeDaliyProfitStyle,
    position
  },
  {
    id: "y6",
    type: "outout",
    data: { label: "? CNY" },
    style: nodeMoneyStyle,
    position
  },
  {
    id: "y7",
    data: { label: "DRO Z_400" },
    style: nodeDroStyle,
    position
  }
];

export const initialEdges = [
  {
    id: "ex12",
    source: "x1",
    target: "x2",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex23",
    source: "x2",
    target: "x3",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex341",
    source: "x3",
    target: "x41",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex342",
    source: "x3",
    target: "x42",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex343",
    source: "x3",
    target: "x43",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex4151",
    source: "x41",
    target: "x51",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex4252",
    source: "x42",
    target: "x52",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex5161",
    source: "x51",
    target: "x61",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex5163",
    source: "x51",
    target: "x63",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex5262",
    source: "x52",
    target: "x62",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex5264",
    source: "x52",
    target: "x64",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex6371",
    source: "x63",
    target: "x71",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex6472",
    source: "x64",
    target: "x72",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex7181",
    source: "x71",
    target: "x81",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex7183",
    source: "x71",
    target: "x83",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex7282",
    source: "x72",
    target: "x82",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex7284",
    source: "x72",
    target: "x84",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex6191",
    source: "x61",
    target: "x91",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex6291",
    source: "x62",
    target: "x91",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex8492",
    source: "x84",
    target: "x92",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex91101",
    source: "x91",
    target: "x101",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex92102",
    source: "x92",
    target: "x102",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex101111",
    source: "x101",
    target: "x111",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex83112",
    source: "x83",
    target: "x112",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex111121",
    source: "x111",
    target: "x121",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex111123",
    source: "x111",
    target: "x123",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex112122",
    source: "x112",
    target: "x122",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex112124",
    source: "x112",
    target: "x124",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ey12",
    source: "y1",
    target: "y2",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ey23",
    source: "y2",
    target: "y3",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ex43y3",
    source: "x43",
    target: "y3",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ey34",
    source: "y3",
    target: "y4",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ey45",
    source: "y4",
    target: "y5",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ey56",
    source: "y5",
    target: "y6",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  },
  {
    id: "ey57",
    source: "y5",
    target: "y7",
    type: edgeType,
    animated: true,
    markerEnd: edgeMarkerEndType
  }
];
