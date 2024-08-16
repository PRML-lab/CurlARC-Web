import { ChevronRightIcon } from '@/components/icons'
import Link from 'next/link'

type RecordItemProps = {
  result: 'win' | 'loss'
  teamName: string
  date: string
}

function RecordItem({ result, teamName, date }: RecordItemProps) {
  const isWin = result === 'win'
  return (
    <Link href="#" className="flex items-center justify-between rounded-lg bg-muted/10 p-4 hover:bg-muted/20">
      <div className="flex items-center gap-4">
        <div
          className={`w-16 rounded-md px-2 py-1 text-center text-sm font-medium ${isWin ? 'bg-primary text-primary-foreground' : 'bg-red-500 text-white'}`}
        >
          {isWin ? 'Win' : 'Loss'}
        </div>
        <div>
          <p className="font-medium">{`vs. ${teamName}`}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      <ChevronRightIcon className="h-6 w-6 text-muted-foreground" />
    </Link>
  )
}

export default RecordItem
