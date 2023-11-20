import Avatar from "react-avatar";
import Column from "./Column";
import { getRandomColor } from "../util";
import icons from "../icons";

const getList = (groupBy, cards) => {
  if (groupBy === "status")
    return ["Backlog", "Todo", "In progress", "Done", "Canceled"];
  if (groupBy === "priority") return [0, 4, 3, 2, 1];

  const groupsSet = new Set();
  cards.forEach((card) =>
    groupsSet.add(card[groupBy === "user" ? "userId" : groupBy])
  );
  const groupList = Array.from(groupsSet);
  groupList.sort();
  return groupList;
};

const mapGroupLabelsAndIcons = (groupBy, value, users) => {
  if (groupBy === "priority") {
    const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
    return {
      label: priorityLabels[value],
      icon: icons[value] || "",
    };
  } else if (groupBy === "user") {
    const user = users.find((user) => user.id === value);
    return {
      label: user.name,
      icon: (
        <Avatar
          size="20"
          round={true}
          textSizeRatio={1.75}
          color={getRandomColor(user.name)}
          name={user.name}
        />
      ),
    };
  } else {
    return {
      label: value,
      icon: icons[value] || "",
    };
  }
};

const sortCards = (cards, groupBy, sortBy) => {
  cards.sort((a, b) => {
    let propertyA = sortBy === "priority" ? a.priority : a.title.toUpperCase();
    let propertyB = sortBy === "priority" ? b.priority : b.title.toUpperCase();
    if (
      groupBy === "priority" ||
      (sortBy === "priority" && propertyA === propertyB)
    ) {
      propertyA = a.title.toUpperCase();
      propertyB = b.title.toUpperCase();
    }

    if (sortBy === "title" && propertyA === propertyB) {
      propertyA = a.priority;
      propertyB = b.priority;
    }

    if (propertyA < propertyB) {
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }
    return 0;
  });
  return cards;
};

const groupAndAssigncards = (cards, groupBy, groups, users) => {
  cards.forEach((card) => {
    card.userName = users.find((user) => user.id === card.userId).name;
    if (groupBy === "priority")
      groups.find((group) => group.value === card.priority)?.cards.push(card);
    else if (groupBy === "user")
      groups.find((group) => group.value === card.userId)?.cards.push(card);
    else if (groupBy === "status")
      groups.find((group) => group.value === card.status)?.cards.push(card);
  });
};

const getGroups = (groupBy, cards, users, sortBy) => {
  if (!cards) return [];
  if (groupBy === "user" && !users) return [];

  const groupsList = getList(groupBy, cards);

  const groups = groupsList.map((value) => {
    const { label, icon } = mapGroupLabelsAndIcons(groupBy, value, users);
    return {
      value,
      label,
      icon,
      cards: [],
    };
  });

  const sortedCards = sortCards(cards, groupBy, sortBy);

  groupAndAssigncards(sortedCards, groupBy, groups, users);

  return groups;
};

const Table = ({ cards, groupBy, users, sortBy }) => {
  return (
    <div style={TableStyle}>
      {getGroups(groupBy, cards, users, sortBy).map((column) => (
        <Column column={column} />
      ))}
    </div>
  );
};

const TableStyle = {
  margin: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gap: "30px",
};

export default Table;
