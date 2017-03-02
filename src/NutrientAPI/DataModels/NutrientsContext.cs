using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace nutrient_api.DataModels
{
    public partial class NutrientsContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=tcp:nutrientdb.database.windows.net,1433;Initial Catalog=nutrientdb_dev;Persist Security Info=False;User ID=ackqpunk@nutrientdb;Password=ackq9542_12;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Datsrcln>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.NutrNo, e.DataSrcId })
                    .HasName("PK__DATSRCLN__23BD8F52D718C65F");

                entity.HasIndex(e => e.DataSrcId)
                    .HasName("DataSrc_ID");

                entity.HasIndex(e => e.NutrNo)
                    .HasName("Nutr_No");
            });

            modelBuilder.Entity<DerivCd>(entity =>
            {
                entity.HasKey(e => e.DerivCd1)
                    .HasName("DERIV_CD_Deriv_Cd_pk");
            });

            modelBuilder.Entity<FdGroup>(entity =>
            {
                entity.HasKey(e => e.FdGrpCd)
                    .HasName("PK__FD_GROUP__239C34307AA1E3AD");
            });

            modelBuilder.Entity<FoodDes>(entity =>
            {
                entity.HasKey(e => e.NdbNo)
                    .HasName("PK__FOOD_DES__89376617D22FD8C2");

                entity.HasIndex(e => e.FdGrpCd)
                    .HasName("FdGrp_Cd");
            });

            modelBuilder.Entity<Langdesc>(entity =>
            {
                entity.HasKey(e => e.FactorCode)
                    .HasName("PK__LANGDESC__94021EFB09F0111F");
            });

            modelBuilder.Entity<Langual>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.FactorCode })
                    .HasName("PK__LANGUAL__207747F8B0C42F7D");

                entity.HasIndex(e => e.FactorCode)
                    .HasName("Factor_Code");
            });

            modelBuilder.Entity<NutData>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.NutrNo })
                    .HasName("PK__NUT_DATA__24463872F44514D8");

                entity.HasIndex(e => e.DerivCd)
                    .HasName("Deriv_Cd");

                entity.HasIndex(e => e.NutrNo)
                    .HasName("Nutr_no");

                entity.HasIndex(e => e.RefNdbNo)
                    .HasName("Ref_NDB_no");

                entity.HasIndex(e => e.SrcCd)
                    .HasName("Stc_Cd");
            });

            modelBuilder.Entity<NutrDef>(entity =>
            {
                entity.HasKey(e => e.NutrNo)
                    .HasName("PK__NUTR_DEF__D715E65B91FE7617");
            });

            modelBuilder.Entity<SrcCd>(entity =>
            {
                entity.HasKey(e => e.SrcCd1)
                    .HasName("PK__SRC_CD__F3F7869D76CC3687");
            });

            modelBuilder.Entity<Weight>(entity =>
            {
                entity.HasKey(e => new { e.NdbNo, e.Seq })
                    .HasName("PK__WEIGHT__159685DFAAC7E462");
            });
        }

        public virtual DbSet<DataSrc> DataSrc { get; set; }
        public virtual DbSet<Datsrcln> Datsrcln { get; set; }
        public virtual DbSet<DerivCd> DerivCd { get; set; }
        public virtual DbSet<FdGroup> FdGroup { get; set; }
        public virtual DbSet<FoodDes> FoodDes { get; set; }
        public virtual DbSet<Langdesc> Langdesc { get; set; }
        public virtual DbSet<Langual> Langual { get; set; }
        public virtual DbSet<NutData> NutData { get; set; }
        public virtual DbSet<NutrDef> NutrDef { get; set; }
        public virtual DbSet<SrcCd> SrcCd { get; set; }
        public virtual DbSet<Weight> Weight { get; set; }

        // Unable to generate entity type for table 'dbo.FOOTNOTE'. Please see the warning messages.
    }
}