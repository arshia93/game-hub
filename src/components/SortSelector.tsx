import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void
    selectedSortOrder: string
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

// 1 - check api docs
// 2 - create hook for filtering endpoint -- probably can use useGames since same endpoint
// 3 - store state in App.tsx for adjust selected filter
// 4 - pass in state to SortSelector and GameGrid
// 5 - add onclick function to SortSelector
// 6 - add params to useGames
