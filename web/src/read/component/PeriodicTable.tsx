import React, { Component } from "react";
import { PeriodicBook } from "./PeriodicBook";
import '../resources/style/read.css'

export class PeriodicTable extends Component {


    // Dimensions of the periodic book
    static NB_ROW = 6
    static NB_COL = 16

    render() {
        return (
            <div className="periodic-table" >

                <ul>
                    <li>
                        <span className="periodic-table-old-testament" >
                            <strong>Old</strong> Testament&nbsp;
                        </span>
                    </li>
                    <li>
                        <table>
                            {this.createPeriodicTable()}
                        </table>
                    </li>
                    <li>
                        <span className="periodic-table-new-testament" >
                            <strong>New</strong> Testament
                        </span>
                    </li>
                </ul>
            </div>
        );
    }

    createPeriodicTable = () => {
        let table = []
        let books = this.createPeriodicBooks()

        for (let i = 0; i < PeriodicTable.NB_ROW; i++) {
            let row = []
            for (let j = 0; j < PeriodicTable.NB_COL; j++) {
                if (books[i] && books[i][j])
                    row.push(<td>{books[i][j]}</td>)
                else
                    row.push(<td></td>)
            }
            table.push(<tr>{row}</tr>)
        }
        return table;
    }

    createPeriodicBooks = () => {

        // Initialize book map
        let books: any[][] = []
        for (let i = 0; i < PeriodicTable.NB_ROW; i++) {
            books[i] = [];
            for (let j = 0; j < PeriodicTable.NB_COL; j++) {
                books[i][j] = null
            }
        }

        // Register all the books

        // OLD TESTAMENT
        books[0][0] = <PeriodicBook nbChapter={50} key={0} bigramme="Gn" author="Moses" />
        books[0][1] = <PeriodicBook nbChapter={40} key={1} bigramme="Ex" author="Moses" />
        books[0][2] = <PeriodicBook nbChapter={27} key={2} bigramme="Lv" author="Moses" />
        books[0][3] = <PeriodicBook nbChapter={26} key={3} bigramme="Nu" author="Moses" />
        books[0][4] = <PeriodicBook nbChapter={34} key={4} bigramme="Dt" author="Moses" author2="Joshua" />

        books[1][0] = <PeriodicBook nbChapter={24} key={5} bigramme="Js" author="Joshua" />
        books[1][1] = <PeriodicBook nbChapter={21} key={6} bigramme="Ju" author="Samuel" />
        books[1][2] = <PeriodicBook nbChapter={4} key={7} bigramme="Ru" author="Samuel" />
        books[1][3] = <PeriodicBook nbChapter={31} key={8} bigramme="Sa¹" author="Samuel" />
        books[1][4] = <PeriodicBook nbChapter={24} key={9} bigramme="Sa²" author="Nathan" author2="Gad" />
        books[1][5] = <PeriodicBook nbChapter={22} key={10} bigramme="Ki¹" author="Jeremiah" />
        books[1][6] = <PeriodicBook nbChapter={25} key={11} bigramme="Ki²" author="Jeremiah" />

        books[2][0] = <PeriodicBook nbChapter={29} key={12} bigramme="Ch¹" author="Ezra" />
        books[2][1] = <PeriodicBook nbChapter={36} key={13} bigramme="Ch²" author="Ezra" />
        books[2][2] = <PeriodicBook nbChapter={10} key={14} bigramme="Ez" author="Ezra" />
        books[2][3] = <PeriodicBook nbChapter={13} key={15} bigramme="Ne" author="Ezra" />
        books[2][4] = <PeriodicBook nbChapter={10} key={16} bigramme="Es" author="Mordecai" />

        books[3][0] = <PeriodicBook nbChapter={42} key={17} bigramme="Jb" author="Job Eli" author2="Mo Sal" />
        books[3][1] = <PeriodicBook nbChapter={150} key={18} bigramme="Ps" author="David" author2="Various" />
        books[3][2] = <PeriodicBook nbChapter={31} key={19} bigramme="Pr" author="Salomon" />
        books[3][3] = <PeriodicBook nbChapter={12} key={20} bigramme="Ec" author="Salomon" />
        books[3][4] = <PeriodicBook nbChapter={8} key={21} bigramme="So" author="Salomon" />

        books[4][0] = <PeriodicBook nbChapter={66} key={22} bigramme="Is" author="Isaiah" />
        books[4][1] = <PeriodicBook nbChapter={52} key={23} bigramme="Je" author="Jeremiah" />
        books[4][2] = <PeriodicBook nbChapter={5} key={24} bigramme="La" author="Jeremiah" />
        books[4][3] = <PeriodicBook nbChapter={48} key={25} bigramme="Ek" author="Ezekiel" />
        books[4][4] = <PeriodicBook nbChapter={12} key={26} bigramme="Da" author="Daniel" />

        books[5][0] = <PeriodicBook nbChapter={14} key={27} bigramme="Ho" author="Hosea" />
        books[5][1] = <PeriodicBook nbChapter={3} key={28} bigramme="Jl" author="Joel" />
        books[5][2] = <PeriodicBook nbChapter={9} key={29} bigramme="Am" author="Amos" />
        books[5][3] = <PeriodicBook nbChapter={1} key={30} bigramme="Ob" author="Obadiah" />
        books[5][4] = <PeriodicBook nbChapter={4} key={31} bigramme="Jh" author="Jonah" />
        books[5][5] = <PeriodicBook nbChapter={7} key={32} bigramme="Mi" author="Micah" />
        books[5][6] = <PeriodicBook nbChapter={3} key={33} bigramme="Na" author="Nahum" />
        books[5][7] = <PeriodicBook nbChapter={3} key={34} bigramme="Hk" author="Habakkuk" />
        books[5][8] = <PeriodicBook nbChapter={3} key={35} bigramme="Zp" author="Zephaniah" />
        books[5][9] = <PeriodicBook nbChapter={2} key={36} bigramme="Ha" author="Haggai" />
        books[5][10] = <PeriodicBook nbChapter={14} key={37} bigramme="Zc" author="Zechariah" />
        books[5][11] = <PeriodicBook nbChapter={4} key={38} bigramme="Ml" author="Malachi" />

        // NEW TESTAMENT

        books[0][12] = <PeriodicBook nbChapter={28} key={0} bigramme="Mt" author="Genesis" />
        books[0][13] = <PeriodicBook nbChapter={16} key={1} bigramme="Mk" author="Genesis" />
        books[0][14] = <PeriodicBook nbChapter={24} key={2} bigramme="Lk" author="Genesis" />
        books[0][15] = <PeriodicBook nbChapter={21} key={3} bigramme="Jn" author="Genesis" />

        books[1][15] = <PeriodicBook nbChapter={28} key={3} bigramme="Ac" author="Genesis" />

        books[2][10] = <PeriodicBook nbChapter={16} key={0} bigramme="Ro" author="Genesis" />
        books[2][11] = <PeriodicBook nbChapter={16} key={1} bigramme="Co¹" author="Genesis" />
        books[2][12] = <PeriodicBook nbChapter={13} key={0} bigramme="Co²" author="Genesis" />
        books[2][13] = <PeriodicBook nbChapter={6} key={1} bigramme="Ga" author="Genesis" />
        books[2][14] = <PeriodicBook nbChapter={6} key={2} bigramme="Ep" author="Genesis" />
        books[2][15] = <PeriodicBook nbChapter={4} key={3} bigramme="Pp" author="Genesis" />

        books[3][9] = <PeriodicBook nbChapter={4} key={0} bigramme="Cl" author="Genesis" />
        books[3][10] = <PeriodicBook nbChapter={5} key={0} bigramme="Th¹" author="Genesis" />
        books[3][11] = <PeriodicBook nbChapter={3} key={1} bigramme="Th²" author="Genesis" />
        books[3][12] = <PeriodicBook nbChapter={6} key={0} bigramme="Ti¹" author="Genesis" />
        books[3][13] = <PeriodicBook nbChapter={4} key={1} bigramme="Ti²" author="Genesis" />
        books[3][14] = <PeriodicBook nbChapter={3} key={2} bigramme="Tt" author="Genesis" />
        books[3][15] = <PeriodicBook nbChapter={1} key={3} bigramme="Pm" author="Genesis" />

        books[4][8] = <PeriodicBook nbChapter={13} key={0} bigramme="Hb" author="Genesis" />
        books[4][9] = <PeriodicBook nbChapter={5} key={0} bigramme="Ja" author="Genesis" />
        books[4][10] = <PeriodicBook nbChapter={5} key={0} bigramme="Pe¹" author="Genesis" />
        books[4][11] = <PeriodicBook nbChapter={3} key={1} bigramme="Pe²" author="Genesis" />
        books[4][12] = <PeriodicBook nbChapter={5} key={0} bigramme="Jn¹" author="Genesis" />
        books[4][13] = <PeriodicBook nbChapter={1} key={1} bigramme="Jn²" author="Genesis" />
        books[4][14] = <PeriodicBook nbChapter={1} key={2} bigramme="Jn³" author="Genesis" />
        books[4][15] = <PeriodicBook nbChapter={1} key={3} bigramme="Ju" author="Genesis" />

        books[5][15] = <PeriodicBook nbChapter={22} key={3} bigramme="Re" author="Genesis" />

        return books
    }

}