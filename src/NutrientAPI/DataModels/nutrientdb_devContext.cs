using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace NutrientAPI.DataModels
{
    public partial class nutrientdb_devContext : DbContext
    {
        public virtual DbSet<AnimalTypes> AnimalTypes { get; set; }
        public virtual DbSet<Animals> Animals { get; set; }
        public virtual DbSet<Breeds> Breeds { get; set; }
        public virtual DbSet<DataSrc> DataSrc { get; set; }
        public virtual DbSet<Datsrcln> Datsrcln { get; set; }
        public virtual DbSet<DerivCd> DerivCd { get; set; }
        public virtual DbSet<FdGroup> FdGroup { get; set; }
        public virtual DbSet<FoodDes> FoodDes { get; set; }
        public virtual DbSet<Langdesc> Langdesc { get; set; }
        public virtual DbSet<Langual> Langual { get; set; }
        public virtual DbSet<NutData> NutData { get; set; }
        public virtual DbSet<NutrDef> NutrDef { get; set; }
        public virtual DbSet<Physicians> Physicians { get; set; }
        public virtual DbSet<Practices> Practices { get; set; }
        public virtual DbSet<SrcCd> SrcCd { get; set; }
        public virtual DbSet<Weight> Weight { get; set; }

        // Unable to generate entity type for table 'dbo.FOOTNOTE'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=tcp:nutrientdb.database.windows.net,1433;Initial Catalog=nutrientdb_dev;Persist Security Info=False;User ID=ackqpunk@nutrientdb;Password=ackq9542_12;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AnimalTypes>(entity =>
            {
                entity.HasKey(e => e.AnimalTypeId)
                    .HasName("PK__AnimalTy__1E8A4896E31614E2");

                entity.Property(e => e.AnimalTypeId)
                    .HasColumnName("AnimalTypeID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValueSql("''");
            });

            modelBuilder.Entity<Animals>(entity =>
            {
                entity.HasKey(e => e.AnimalId)
                    .HasName("PK_Animals");

                entity.Property(e => e.AnimalId).HasColumnName("AnimalID");

                entity.Property(e => e.AnimalTypeId).HasColumnName("AnimalTypeID");

                entity.Property(e => e.BreedId).HasColumnName("BreedID");

                entity.Property(e => e.CreatedByPhysicianId).HasColumnName("CreatedByPhysicianID");

                entity.Property(e => e.CreatedOn).HasDefaultValueSql("getdate()");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.LastModified).HasDefaultValueSql("getdate()");

                entity.Property(e => e.LastModifiedPhysicianId).HasColumnName("LastModifiedPhysicianID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValueSql("''");

                entity.Property(e => e.Notes).IsRequired();

                entity.Property(e => e.PracticeId).HasColumnName("PracticeID");

                entity.Property(e => e.UnitOfMeasure)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasDefaultValueSql("'lbs'");

                entity.Property(e => e.Weight)
                    .HasColumnType("decimal")
                    .HasDefaultValueSql("0");

                entity.HasOne(d => d.AnimalType)
                    .WithMany(p => p.Animals)
                    .HasForeignKey(d => d.AnimalTypeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Animals_ToAnimalTypes");

                entity.HasOne(d => d.Breed)
                    .WithMany(p => p.Animals)
                    .HasForeignKey(d => d.BreedId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Animals_ToBreeds");

                entity.HasOne(d => d.CreatedByPhysician)
                    .WithMany(p => p.AnimalsCreatedByPhysician)
                    .HasForeignKey(d => d.CreatedByPhysicianId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Animals_CreatedByPhysicanID");

                entity.HasOne(d => d.LastModifiedPhysician)
                    .WithMany(p => p.AnimalsLastModifiedPhysician)
                    .HasForeignKey(d => d.LastModifiedPhysicianId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Animals_LastModifiedByPhysicianID");

                entity.HasOne(d => d.Practice)
                    .WithMany(p => p.Animals)
                    .HasForeignKey(d => d.PracticeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Animals_ToPractice");
            });

            modelBuilder.Entity<Breeds>(entity =>
            {
                entity.HasKey(e => e.BreedId)
                    .HasName("PK_Breeds");

                entity.Property(e => e.BreedId).HasColumnName("BreedID");

                entity.Property(e => e.AnimalTypeId).HasColumnName("AnimalTypeID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValueSql("''");

                entity.HasOne(d => d.AnimalType)
                    .WithMany(p => p.Breeds)
                    .HasForeignKey(d => d.AnimalTypeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_AnimalTypeID_ToAnimalTypes");
            });

            modelBuilder.Entity<DataSrc>(entity =>
            {
                entity.ToTable("DATA_SRC");

                entity.Property(e => e.DataSrcId)
                    .HasColumnName("DataSrc_ID")
                    .HasColumnType("varchar(6)");

                entity.Property(e => e.Authors).HasColumnType("varchar(255)");

                entity.Property(e => e.EndPage)
                    .HasColumnName("End_Page")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.IssueState)
                    .HasColumnName("Issue_State")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.Journal).HasColumnType("varchar(135)");

                entity.Property(e => e.StartPage)
                    .HasColumnName("Start_Page")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.Property(e => e.VolCity)
                    .HasColumnName("Vol_City")
                    .HasColumnType("varchar(16)");

                entity.Property(e => e.Year).HasColumnType("varchar(4)");
            });

            modelBuilder.Entity<Datsrcln>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.NutrNo, e.DataSrcId })
                    .HasName("PK__DATSRCLN__23BD8F52D718C65F");

                entity.ToTable("DATSRCLN");

                entity.HasIndex(e => e.DataSrcId)
                    .HasName("DataSrc_ID");

                entity.HasIndex(e => e.NutrNo)
                    .HasName("Nutr_No");

                entity.Property(e => e.NdbNo)
                    .HasColumnName("NDB_No")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.NutrNo)
                    .HasColumnName("Nutr_No")
                    .HasColumnType("varchar(3)");

                entity.Property(e => e.DataSrcId)
                    .HasColumnName("DataSrc_ID")
                    .HasColumnType("varchar(6)");

                entity.HasOne(d => d.DataSrc)
                    .WithMany(p => p.Datsrcln)
                    .HasForeignKey(d => d.DataSrcId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__DATSRCLN__DataSr__628FA481");

                entity.HasOne(d => d.NdbNoNavigation)
                    .WithMany(p => p.Datsrcln)
                    .HasForeignKey(d => d.NdbNo)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__DATSRCLN__NDB_No__60A75C0F");

                entity.HasOne(d => d.NutrNoNavigation)
                    .WithMany(p => p.Datsrcln)
                    .HasForeignKey(d => d.NutrNo)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__DATSRCLN__Nutr_N__619B8048");
            });

            modelBuilder.Entity<DerivCd>(entity =>
            {
                entity.HasKey(e => e.DerivCd1)
                    .HasName("DERIV_CD_Deriv_Cd_pk");

                entity.ToTable("DERIV_CD");

                entity.Property(e => e.DerivCd1)
                    .HasColumnName("Deriv_Cd")
                    .HasColumnType("varchar(4)");

                entity.Property(e => e.DerivDesc)
                    .IsRequired()
                    .HasColumnName("Deriv_Desc")
                    .HasColumnType("varchar(120)");
            });

            modelBuilder.Entity<FdGroup>(entity =>
            {
                entity.HasKey(e => e.FdGrpCd)
                    .HasName("PK__FD_GROUP__239C34307AA1E3AD");

                entity.ToTable("FD_GROUP");

                entity.Property(e => e.FdGrpCd)
                    .HasColumnName("FdGrp_Cd")
                    .HasColumnType("varchar(4)");

                entity.Property(e => e.FdGrpDesc)
                    .IsRequired()
                    .HasColumnName("FdGrp_Desc")
                    .HasColumnType("varchar(60)");
            });

            modelBuilder.Entity<FoodDes>(entity =>
            {
                entity.HasKey(e => e.NdbNo)
                    .HasName("PK__FOOD_DES__89376617D22FD8C2");

                entity.ToTable("FOOD_DES");

                entity.HasIndex(e => e.FdGrpCd)
                    .HasName("FdGrp_Cd");

                entity.Property(e => e.NdbNo)
                    .HasColumnName("NDB_No")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.ChoFactor)
                    .HasColumnName("CHO_Factor")
                    .HasColumnType("decimal");

                entity.Property(e => e.ComName).HasColumnType("varchar(100)");

                entity.Property(e => e.FatFactor)
                    .HasColumnName("Fat_Factor")
                    .HasColumnType("decimal");

                entity.Property(e => e.FdGrpCd)
                    .IsRequired()
                    .HasColumnName("FdGrp_Cd")
                    .HasColumnType("varchar(4)");

                entity.Property(e => e.LongDesc)
                    .IsRequired()
                    .HasColumnName("Long_Desc")
                    .HasColumnType("varchar(200)");

                entity.Property(e => e.ManufacName).HasColumnType("varchar(65)");

                entity.Property(e => e.NFactor)
                    .HasColumnName("N_Factor")
                    .HasColumnType("decimal");

                entity.Property(e => e.ProFactor)
                    .HasColumnName("Pro_Factor")
                    .HasColumnType("decimal");

                entity.Property(e => e.RefDesc)
                    .HasColumnName("Ref_desc")
                    .HasColumnType("varchar(135)");

                entity.Property(e => e.SciName).HasColumnType("varchar(65)");

                entity.Property(e => e.ShrtDesc)
                    .IsRequired()
                    .HasColumnName("Shrt_Desc")
                    .HasColumnType("varchar(60)");

                entity.Property(e => e.Survey).HasColumnType("varchar(1)");

                entity.HasOne(d => d.FdGrpCdNavigation)
                    .WithMany(p => p.FoodDes)
                    .HasForeignKey(d => d.FdGrpCd)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__FOOD_DES__FdGrp___6383C8BA");
            });

            modelBuilder.Entity<Langdesc>(entity =>
            {
                entity.HasKey(e => e.FactorCode)
                    .HasName("PK__LANGDESC__94021EFB09F0111F");

                entity.ToTable("LANGDESC");

                entity.Property(e => e.FactorCode)
                    .HasColumnName("Factor_Code")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnType("varchar(140)");
            });

            modelBuilder.Entity<Langual>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.FactorCode })
                    .HasName("PK__LANGUAL__207747F8B0C42F7D");

                entity.ToTable("LANGUAL");

                entity.HasIndex(e => e.FactorCode)
                    .HasName("Factor_Code");

                entity.Property(e => e.NdbNo)
                    .HasColumnName("NDB_No")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.FactorCode)
                    .HasColumnName("Factor_Code")
                    .HasColumnType("varchar(5)");

                entity.HasOne(d => d.FactorCodeNavigation)
                    .WithMany(p => p.Langual)
                    .HasForeignKey(d => d.FactorCode)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__LANGUAL__Factor___6754599E");

                entity.HasOne(d => d.NdbNoNavigation)
                    .WithMany(p => p.Langual)
                    .HasForeignKey(d => d.NdbNo)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__LANGUAL__NDB_No__66603565");
            });

            modelBuilder.Entity<NutData>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.NutrNo })
                    .HasName("PK__NUT_DATA__24463872F44514D8");

                entity.ToTable("NUT_DATA");

                entity.HasIndex(e => e.DerivCd)
                    .HasName("Deriv_Cd");

                entity.HasIndex(e => e.NutrNo)
                    .HasName("Nutr_no");

                entity.HasIndex(e => e.RefNdbNo)
                    .HasName("Ref_NDB_no");

                entity.HasIndex(e => e.SrcCd)
                    .HasName("Stc_Cd");

                entity.Property(e => e.NdbNo)
                    .HasColumnName("NDB_No")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.NutrNo)
                    .HasColumnName("Nutr_No")
                    .HasColumnType("varchar(3)");

                entity.Property(e => e.AddModDate)
                    .HasColumnName("AddMod_Date")
                    .HasColumnType("date");

                entity.Property(e => e.AddNutrMark)
                    .HasColumnName("Add_Nutr_Mark")
                    .HasColumnType("varchar(1)");

                entity.Property(e => e.Cc)
                    .HasColumnName("CC")
                    .HasColumnType("varchar(1)");

                entity.Property(e => e.DerivCd)
                    .HasColumnName("Deriv_Cd")
                    .HasColumnType("varchar(4)");

                entity.Property(e => e.Df).HasColumnName("DF");

                entity.Property(e => e.LowEb)
                    .HasColumnName("Low_EB")
                    .HasColumnType("decimal");

                entity.Property(e => e.Max).HasColumnType("decimal");

                entity.Property(e => e.Min).HasColumnType("decimal");

                entity.Property(e => e.NumDataPts).HasColumnName("Num_Data_Pts");

                entity.Property(e => e.NumStudies).HasColumnName("Num_Studies");

                entity.Property(e => e.NutrVal)
                    .HasColumnName("Nutr_Val")
                    .HasColumnType("decimal");

                entity.Property(e => e.RefNdbNo)
                    .HasColumnName("Ref_NDB_No")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.SrcCd)
                    .IsRequired()
                    .HasColumnName("Src_Cd")
                    .HasColumnType("varchar(2)");

                entity.Property(e => e.StatCmt)
                    .HasColumnName("Stat_cmt")
                    .HasColumnType("varchar(10)");

                entity.Property(e => e.StdError)
                    .HasColumnName("Std_Error")
                    .HasColumnType("decimal");

                entity.Property(e => e.UpEb)
                    .HasColumnName("Up_EB")
                    .HasColumnType("decimal");

                entity.HasOne(d => d.NdbNoNavigation)
                    .WithMany(p => p.NutDataNdbNoNavigation)
                    .HasForeignKey(d => d.NdbNo)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__NUT_DATA__NDB_No__68487DD7");

                entity.HasOne(d => d.NutrNoNavigation)
                    .WithMany(p => p.NutData)
                    .HasForeignKey(d => d.NutrNo)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__NUT_DATA__Nutr_N__693CA210");

                entity.HasOne(d => d.RefNdbNoNavigation)
                    .WithMany(p => p.NutDataRefNdbNoNavigation)
                    .HasForeignKey(d => d.RefNdbNo)
                    .HasConstraintName("FK__NUT_DATA__Ref_ND__6B24EA82");

                entity.HasOne(d => d.SrcCdNavigation)
                    .WithMany(p => p.NutData)
                    .HasForeignKey(d => d.SrcCd)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__NUT_DATA__Src_Cd__6A30C649");
            });

            modelBuilder.Entity<NutrDef>(entity =>
            {
                entity.HasKey(e => e.NutrNo)
                    .HasName("PK__NUTR_DEF__D715E65B91FE7617");

                entity.ToTable("NUTR_DEF");

                entity.Property(e => e.NutrNo)
                    .HasColumnName("Nutr_No")
                    .HasColumnType("varchar(3)");

                entity.Property(e => e.NumDec)
                    .IsRequired()
                    .HasColumnName("Num_Dec")
                    .HasColumnType("varchar(1)");

                entity.Property(e => e.NutrDesc)
                    .IsRequired()
                    .HasColumnType("varchar(60)");

                entity.Property(e => e.SrOrder).HasColumnName("SR_Order");

                entity.Property(e => e.Tagname).HasColumnType("varchar(20)");

                entity.Property(e => e.Units)
                    .IsRequired()
                    .HasColumnType("varchar(7)");
            });

            modelBuilder.Entity<Physicians>(entity =>
            {
                entity.HasKey(e => e.PhysicianId)
                    .HasName("PK__Physicia__DFF5ED73882BBDB0");

                entity.Property(e => e.PhysicianId).HasColumnName("PhysicianID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValueSql("''");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValueSql("''");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValueSql("''");

                entity.Property(e => e.PracticeId).HasColumnName("PracticeID");

                entity.HasOne(d => d.Practice)
                    .WithMany(p => p.Physicians)
                    .HasForeignKey(d => d.PracticeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Physicians_ToPractice");
            });

            modelBuilder.Entity<Practices>(entity =>
            {
                entity.HasKey(e => e.PracticeId)
                    .HasName("PK__Practice__352A1612433F2C6A");

                entity.Property(e => e.PracticeId)
                    .HasColumnName("PracticeID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValueSql("''");
            });

            modelBuilder.Entity<SrcCd>(entity =>
            {
                entity.HasKey(e => e.SrcCd1)
                    .HasName("PK__SRC_CD__F3F7869D76CC3687");

                entity.ToTable("SRC_CD");

                entity.Property(e => e.SrcCd1)
                    .HasColumnName("Src_Cd")
                    .HasColumnType("varchar(2)");

                entity.Property(e => e.SrcCdDesc)
                    .IsRequired()
                    .HasColumnName("SrcCd_Desc")
                    .HasColumnType("varchar(60)");
            });

            modelBuilder.Entity<Weight>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.Seq })
                    .HasName("PK__WEIGHT__159685DFAAC7E462");

                entity.ToTable("WEIGHT");

                entity.Property(e => e.NdbNo)
                    .HasColumnName("NDB_No")
                    .HasColumnType("varchar(5)");

                entity.Property(e => e.Seq).HasColumnType("varchar(2)");

                entity.Property(e => e.Amount).HasColumnType("decimal");

                entity.Property(e => e.GmWgt)
                    .HasColumnName("Gm_Wgt")
                    .HasColumnType("decimal");

                entity.Property(e => e.MsreDesc)
                    .IsRequired()
                    .HasColumnName("Msre_Desc")
                    .HasColumnType("varchar(84)");

                entity.Property(e => e.NumDataPts).HasColumnName("Num_Data_Pts");

                entity.Property(e => e.StdDev)
                    .HasColumnName("Std_Dev")
                    .HasColumnType("decimal");

                entity.HasOne(d => d.NdbNoNavigation)
                    .WithMany(p => p.Weight)
                    .HasForeignKey(d => d.NdbNo)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__WEIGHT__NDB_No__6C190EBB");
            });
        }
    }
}