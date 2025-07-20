import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentActivities } from "@/data/dummyData";
const RecentActivityTable = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full overflow-x-auto text-black dark:text-white">
      <Table className="capitalize w-full min-w-[600px]">
        <TableCaption className="text-gray-500 dark:text-gray-300">Recent Activity</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold bg-gray-100 dark:bg-gray-700">Username</TableHead>
            <TableHead className="font-bold bg-gray-100 dark:bg-gray-700">Action</TableHead>
            <TableHead className="font-bold bg-gray-100 dark:bg-gray-700">Type</TableHead>
            <TableHead className="font-bold bg-gray-100 dark:bg-gray-700">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentActivities
            .slice(0, 5)
            .sort((a, b) => a.time.localeCompare(b.time))
            .map((activity) => (
              <TableRow
                key={activity.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.type}</TableCell>
                <TableCell>{activity.time}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentActivityTable;
